import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]
}

const Roomsfilter = ({rooms}) => {
	const context = useContext(RoomContext)
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context

    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((type, index) => {
        return <option value={type} key={index}>{type}</option>
    })
    let people = getUnique(rooms, 'capacity')
    people = people.map((person, index) => {
        return <option value={person} key={index}>{person}</option>
    })
	return (
        <section className="filter-container">
            <Title title='search rooms'></Title>
            <form className='filter-form'>
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>{types}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>{people}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" id='price' className='form-control' onChange={handleChange} name='price' min={minPrice} max={maxPrice} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input type="number"  id='size' className='size-input' value={minSize} onChange={handleChange} name='minSize' />
                    <input type="number"  id='size' className='size-input' value={maxSize} onChange={handleChange} name='maxSize' />
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Roomsfilter
