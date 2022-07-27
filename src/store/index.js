import { configureStore } from '@reduxjs/toolkit';

import isMobileReducer from './features/isMobile'

import navMinDimensionReducer from './features/navMinDimension';

import postsListReducer from './features/postList'

import projectListReducer from './features/projectList';

import projectThumbnailsReducer from './features/projectThumbnails';

import projectReducer from './features/singleProject';

import scrolledPastHeaderReducer from './features/scrolledPastHeader';

import stackDataReducer from './features/stackData';

import titleAddendumReducer from './features/titleAddendum'

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    navMinDimension: navMinDimensionReducer,
    project: projectReducer,
    projects: projectListReducer,
    projectThumbnails: projectThumbnailsReducer,
    posts: postsListReducer,
    scrolledPastHeader: scrolledPastHeaderReducer,
    stackData: stackDataReducer,
    titleAddendum: titleAddendumReducer,
  },
});
