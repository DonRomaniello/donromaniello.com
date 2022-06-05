import React, {useState, useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';

import { useParams } from 'react-router';

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
     <Flex
          mt='5vw'
          >
          <Box
            minWidth={navverMinDimension}
            onClick={onToggle}
            onMouseEnter={onToggle}
            shadow='md'
            >
              <NavDrawer posts={posts} onToggle={onToggle} isOpen={isOpen} />
          </Box>
          <Box
           flex='1'
           shadow='md'
           >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog/:name" element={<Post posts={posts} />} />
          </Routes>
          </Box>
      </Flex>
      </>
  )

}

export default BottomBar
