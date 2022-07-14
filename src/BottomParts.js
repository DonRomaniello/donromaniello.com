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

import ColorModeSwitcher from './ColorModeSwitcher';

import Home from './Home'

import Post from './Post'

import Projects from './Projects';

import Project from './Project'

function BottomBar(props) {

  const isMobile = useSelector(selectIsMobile);

  const navverMinDimension = (isMobile ? '10vw' : '75px')

  const { posts,
          preCachedHeadshot,
          preCachedThumbnails }  = props;

  return (
    <>
      <Flex
      mt='20px'
      flex='1'
      padding={navverMinDimension}
      alignContent='center'
      justify='center'
      >
        <Box>
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
            path="/blog/:name"
            element={<Post
              posts={posts}
              preCachedThumbnails={preCachedThumbnails}
                      />} />
            <Route
            exact path="/projects"
            element={<Projects
                      />} />
            <Route
            exact path="/projects/:name"
            element={<Project
                      />} />
          </Routes>
        </Box>
      </Flex>
        <ColorModeSwitcher
          position='fixed'
          bottom='1vh'
          left={isMobile ? '-10%' : '-3vh'}
        />
      </>
  )

}

export default BottomBar
