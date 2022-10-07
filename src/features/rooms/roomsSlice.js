import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonRooms from "../../json/jsonRoom";

// const initialState = jsonRooms;

function delay(data) {
  const time = 200 + Math.round(Math.random() * 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  console.log("delayedThunk");
  return await delay(jsonRooms);
});

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    status: null,
    loading: null,
  },
  reducers: {
    listRooms: (state, action) => {
      state.push(action.payload);
    },
    addRoom: (state, action) => {
      state.push(action.payload);
    },
    editRoom: (state, action) => {
      const { id, avatar, room_id, room_name, bed_type, floor, facilities, rate, status } = action.payload;
      const foundRoom = state.find((room) => room.id === id);
      if (foundRoom) {
        foundRoom.avatar = avatar;
        foundRoom.room_id = room_id;
        foundRoom.room_name = room_name;
        foundRoom.bed_type = bed_type;
        foundRoom.floor = floor;
        foundRoom.facilities = facilities;
        foundRoom.rate = rate;
        foundRoom.status = status;
      }
    },
    deleteRoom: (state, action) => {
      const foundRoom = state.find((room) => room.id === action.payload);
      if (foundRoom) {
        state.splice(state.indexOf(foundRoom), 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success";
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.loading = false;
        state.status = "failed";
        state.rooms = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { listRooms, addRoom, editRoom, deleteRoom } = roomsSlice.actions;

export const roomsList = (state) => state.rooms.rooms; 
export default roomsSlice.reducer;
