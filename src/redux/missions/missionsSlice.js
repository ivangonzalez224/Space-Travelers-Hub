import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      const data = await response;
      data.data.forEach((key) => {
        key.status = 'NOT A MEMBER';
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  missionItems: [],
  error: '',
};

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joingMission: (state, action) => {
      state.missionItems.push(action.payload);
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missionItems = state.missionItems.filter((item) => item.mission_id !== missionId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.missionItems = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const missionsAction = missionsSlice.actions;
export default missionsSlice.reducer;
