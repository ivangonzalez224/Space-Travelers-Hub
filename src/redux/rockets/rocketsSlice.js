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
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
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
