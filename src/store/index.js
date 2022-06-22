import { configureStore } from '@reduxjs/toolkit';

import isMobileReducer from './features/isMobile'

import titleAddendumReducer from './features/titleAddendum'

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    titleAddendum: titleAddendumReducer,
  },
});
