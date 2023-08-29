import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(api);
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        if (rocket.reserved === true) {
          rocket.reserved = false;
        } else {
          rocket.reserved = true;
        }
      }
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.status = 'success';
    },
    [fetchRockets.rejected]: (state) => {
      state.status = 'failed';
    }
    ,
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
