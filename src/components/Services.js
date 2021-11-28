import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, qui.',
			},
			{
				icon: <FaHiking />,
				title: 'Endless Hiking',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, qui.',
			},
            {
				icon: <FaShuttleVan />,
				title: 'Free shuttle',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, qui.',
			},
            {
				icon: <FaBeer />,
				title: 'Strongest Beer',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, qui.',
			},
		],
	}
	render() {
		return (
			<section className='services'>
				<Title title='services' />
                <div className="services-center">
                    {this.state.services.map(({icon, title, info}, index) => {
                        return <article key={index} className='service'>
                            <span>{icon}</span>
                            <h6>{title}</h6>
                            <p>{info}</p>
                        </article>
                    })}
                </div>
			</section>
		)
	}
}

export default Services
