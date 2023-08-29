import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      const data = response;
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
    joinMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missionItems.filter((item) => item.mission_id === missionId);
      if (mission) {
        if (mission.status === true) {
          mission.status = false;
        } else {
          mission.status = true;
        }
      }
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

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
