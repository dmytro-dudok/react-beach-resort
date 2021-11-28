import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import defaultBcg from '../images/room-1.jpeg'
import { RoomContext } from '../context'
import withHook from '../utils/withHook'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			slug: this.props.params.slug,
			defaultBcg,
		}
	}
	static contextType = RoomContext
	// componentDidMount() {}

	render() {
		const { getRoom } = this.context
		const room = getRoom(this.state.slug)
		console.log(`room`, room)

		if (!room) {
			return (
				<div className='error'>
					<h3>no such room could be found</h3>
					<Link to='/rooms' className='btn-primary'>
						back to rooms
					</Link>
				</div>
			)
		}

        const { name, description, capacity, size, price, extras, breakfast, pets, images:[mainImage, ...restImages]  } = room
		// let [mainImage, ...restImages] = images

		return (
			<>
			<StyledHero img={mainImage || this.state.defaultBcg}>
			   <Banner title={`${name} room`}>
			       <Link to='/rooms' className='btn-primary'>back to rooms</Link>
			   </Banner>
			</StyledHero>
			<section className="single-room">
				<div className="single-room-images">
					{restImages.map((image, index) => (<img key={index} src={image} alt=''/>))}
				</div>
				<div className="single-room-info">
					<article className="desc">
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article className="info">
						<h3>info</h3>
						<h6>{`price : $${price}`}</h6>
						<h6>{`size : ${size} SQFT`}</h6>
						<h6>{`${pets ? 'pets allowed' : 'no pets allowed'}`}</h6>
						<h6>{`max capacity : ${capacity} ${capacity > 1 ? 'people' : 'person'}`}</h6>
						<h6>{breakfast && 'free breakfast included'}</h6>
					</article>
				</div>
			</section>
			<section className="room-extras">
				<h6>extras</h6>
				<ul className="extras">
					{extras.map((item, index) => {
						return <li key={index}>- {item}</li>
					})}
				</ul>
			</section>
			</>
		)
	}
}

export default withHook(SingleRoom, useParams, 'params')
