import React, {useState, useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';

import {
  Box,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

import { db } from './config/firebase';

import { collection, onSnapshot } from "firebase/firestore";

import Home from './Home'

import Post from './Post'

import NavDrawer from './NavDrawer';

function BottomBar(props) {


  const { navverMinDimension }  = props;

  const { isOpen, onToggle } = useDisclosure()

  const [posts, setPosts] = useState([]);

  const getBlogPosts = async () => {

    const unsub = onSnapshot(collection(db, "blog"), (doc) => {
      setPosts(doc.docs.map((doc) => doc.data()))
  });

    return unsub

  }

  useEffect(() => {
    getBlogPosts();
  }, [])

  return (
    <>
      {/* <Flex
            mt={navverMinDimension}
            h='100%'
            > */}
            {/* <Box
              minWidth={navverMinDimension}
              onClick={onToggle}
              onMouseEnter={onToggle}
              shadow='md'
              >
                <NavDrawer posts={posts} onToggle={onToggle} isOpen={isOpen} />
            </Box> */}
            <Flex
            mt='100'
            flex='1'
            align='center'
            w='62%'
            padding='1vw'
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

        </Flex>
      </>
  )

}

export default BottomBar
