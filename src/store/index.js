import { configureStore } from '@reduxjs/toolkit';

import isMobileReducer from './features/isMobile'

import titleAddendumReducer from './features/titleAddendum'

import scrolledPastHeaderReducer from './features/scrolledPastHeader';

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    titleAddendum: titleAddendumReducer,
    scrolledPastHeader: scrolledPastHeaderReducer,
  },
});
