import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
