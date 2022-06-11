import React, {useState, useEffect} from 'react';

import {
  ChakraProvider,
  useMediaQuery
} from '@chakra-ui/react';

import { collection, onSnapshot } from "firebase/firestore";

import { db } from './config/firebase';

import theme from './config/theme'

import TopBar from './TopBar'

import BottomParts  from './BottomParts'

function App() {

  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const navverMinDimension = '100px'

  const [posts, setPosts] = useState([]);

  const [preLoadedThumbnail, setPreLoadedThumbnail] = useState();

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
    <ChakraProvider theme={theme}>
        <TopBar
        navverMinDimension={navverMinDimension}
        posts={posts}
        setPreLoadedThumbnail={setPreLoadedThumbnail}
        isMobile={isMobile}
        />
        <BottomParts
        navverMinDimension={navverMinDimension}
        posts={posts}
        preLoadedThumbnail={preLoadedThumbnail}
        isMobile={isMobile}
         />
    </ChakraProvider>
  );
}

export default App;
