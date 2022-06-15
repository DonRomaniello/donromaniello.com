import React from 'react';

import { Routes, Route } from 'react-router-dom';

import {
  Box,
  Flex,
} from '@chakra-ui/react';

import Bio from './Bio'

import Home from './Home'

import Post from './Post'

function BottomBar(props) {


  const { navverMinDimension,
          posts,
          preCachedThumbnails }  = props;

  return (
    <>
            <Flex
            mt='20px'
            flex='1'
            >
            <Box
            padding={navverMinDimension}
            >
            <Routes>
              <Route
              exact path="/"
              element={<Home
                        navverMinDimension={navverMinDimension}
              />} />
              <Route
              exact path="/bio"
              element={<Bio
                        navverMinDimension={navverMinDimension} />} />
              <Route
              exact path="/blog"
              element={<Home
                        navverMinDimension={navverMinDimension} />} />
              <Route
              exact path="/projects"
              element={<Home
                        navverMinDimension={navverMinDimension} />} />
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
