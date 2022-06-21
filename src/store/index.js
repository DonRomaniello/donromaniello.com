import { configureStore } from '@reduxjs/toolkit';
// import navverMinDimension from './features/navverMinDimension';
import isMobileReducer from './features/isMobile'

import isJerkReducer from './features/isJerk'

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    isJerk: isJerkReducer,
  },
});
