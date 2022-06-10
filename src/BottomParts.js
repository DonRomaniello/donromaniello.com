import React from 'react';

import { Routes, Route } from 'react-router-dom';

import {
  Box,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

import Home from './Home'

import Post from './Post'

import NavDrawer from './NavDrawer';

function BottomBar(props) {


  const { navverMinDimension, posts }  = props;

  const { isOpen, onToggle } = useDisclosure()

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
              element={<Home navverMinDimension={navverMinDimension} />} />
              <Route
              exact path="/bio"
              element={<Home navverMinDimension={navverMinDimension} />} />
              <Route
              exact path="/blog"
              element={<Home navverMinDimension={navverMinDimension} />} />
              <Route
              exact path="/projects"
              element={<Home navverMinDimension={navverMinDimension} />} />
              <Route
              path="/blog/:name"
              element={<Post posts={posts} />} />
            </Routes>
            </Box>
        </Flex>
      </>
  )

}

export default BottomBar
