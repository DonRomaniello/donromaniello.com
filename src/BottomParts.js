import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  Box,
  Flex,
} from '@chakra-ui/react';

import Bio from './Bio'

import Home from './Home'

import Post from './Post'

function BottomBar(props) {

  const isMobile = useSelector(selectIsMobile);

  const navverMinDimension = (isMobile ? '50px' : '100px')

  const { posts,
          preCachedHeadshot,
          preCachedThumbnails }  = props;

  return (
    <>
            <Flex
            mt='20px'
            flex='1'
            >
            <Box
            padding={navverMinDimension}
            maxW={isMobile ? '90%' : '900px' }
            >
            <Routes>
              <Route
              exact path="/"
              element={<Home
              />} />
              <Route
              exact path="/bio"
              element={<Bio
                        preCachedHeadshot={preCachedHeadshot} />} />
              <Route
              exact path="/blog"
              element={<Home
                         />} />
              <Route
              exact path="/projects"
              element={<Home
                         />} />
              <Route
              path="/blog/:name"
              element={<Post
                        posts={posts}
                        preCachedThumbnails={preCachedThumbnails}
              />
              }
              />
            </Routes>
            </Box>
        </Flex>
      </>
  )

}

export default BottomBar
