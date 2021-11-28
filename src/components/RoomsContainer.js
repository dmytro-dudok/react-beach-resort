﻿import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomsContainer({ context }) {
	const { loading, sortedRooms, rooms } = context
	if (loading) {
		return <Loading />
	}
	return (
		<>
			<RoomsFilter rooms={rooms}></RoomsFilter>
			<RoomsList rooms={sortedRooms} />
		</>
	)
}

export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// const RoomsContainer = () => {
// 	return (
// 		<RoomConsumer>
// 			{(value) => {
// 				const { loading, sortedRooms, rooms } = value
//                 if (loading) {
//                     return <Loading/>
//                 }
// 				return (
// 					<div>
// 						rooms container
// 						<RoomsFilter rooms={rooms}></RoomsFilter>
// 						<RoomsList rooms={sortedRooms} />
// 					</div>
// 				)
// 			}}
// 		</RoomConsumer>
// 	)
// }

// export default RoomsContainer