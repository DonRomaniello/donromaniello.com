import React, {useState, useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';

import { useParams } from 'react-router';

import {
  Box,
  ChakraProvider,
  Flex,
  useDisclosure
} from '@chakra-ui/react';

import { db } from './config/firebase';

import { collection, onSnapshot } from "firebase/firestore";

import theme from './config/theme'

import NavDrawer from './NavDrawer';

import TopBar from './TopBar'

import Home from './Home'

import Post from './Post'


function App() {

  const divGap = 2;

  const navverMinDimension = 10

  const [isNavverHorizontal, setIsNavverHorizontal] = useState(true);

  const { isOpen, onToggle } = useDisclosure()

  const changeNavOrientation = () => {
   setIsNavverHorizontal(!isNavverHorizontal)
  }

  const [posts, setPosts] = useState([]);

  const [titles, setTitles] = useState([]);

  const getBlogPosts = async () => {

    const unsub = onSnapshot(collection(db, "blog"), (doc) => {
      setPosts(doc.docs.map((doc) => doc.data()))
  });

    return unsub

  }

  useEffect(() => {
    getBlogPosts();
  }, [])

  useEffect(() => {
    if (posts.length) {
      setTitles(posts.map((post) => post.title))
    }

  }, [posts])


  return (
    <ChakraProvider theme={theme}>
      <Box margin='10px' h='100vh'>
        <TopBar />
        <Box w="100%" h={divGap} />

        <Flex
          mt='8vw'
          h='95vh'
          gap={divGap}>
          <Box
          // bgGradient='linear(to-l, white, lightBlue.200)'
            w='5vw'

            minWidth={navverMinDimension}
            onClick={onToggle}
            overflow="hidden"
            onMouseEnter={onToggle}
            shadow='md'
            borderRadius="10px"
            >
              <NavDrawer posts={posts} onToggle={onToggle} isOpen={isOpen} />
          </Box>
          <Box
           flex='1'
           overflow="hidden"
           borderRadius="10px"
           shadow='md'
           >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog/:name" element={<Post posts={posts} />} />
          </Routes>
          </Box>
      </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
