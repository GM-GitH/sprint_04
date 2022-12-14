import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from "../features/rooms/roomsSlice"
import usersReducer from "../features/users/usersSlice"
import bookingsReducer from "../features/bookings/bookingsSlice"

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    users: usersReducer,
    bookings: bookingsReducer
},
})