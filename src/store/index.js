import { configureStore } from '@reduxjs/toolkit';

import isMobileReducer from './features/isMobile'

import titleAddendumReducer from './features/titleAddendum'

import scrolledPastHeaderReducer from './features/scrolledPastHeader';

import projectListReducer from './features/projectList';

import postsListReducer from './features/postList'

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    titleAddendum: titleAddendumReducer,
    scrolledPastHeader: scrolledPastHeaderReducer,
    projects: projectListReducer,
    posts: postsListReducer,
  },
});
