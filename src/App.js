import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setIsMobile,
} from './store/features/isMobile'

import {
  ChakraProvider,
  useMediaQuery
} from '@chakra-ui/react';

import { getDocuments,
         getImage } from './modules/index.js';

import theme from './config/theme'

import "@fontsource/yantramanav";

import TopBar from './TopBar'

import BottomParts  from './BottomParts'

function App() {

  // This listens for updates to the window size
  const mobileStatus = useMediaQuery("(max-width: 768px)")?.[0]

  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  const [preCachedThumbnails, setPreCachedThumbnails] = useState({});

  const [preCachedHeadshot, setPreCachedHeadshot] = useState();

  useEffect(() => {

    // This updates the 'isMobile' status based on the media query

    dispatch(setIsMobile(mobileStatus))

  }, [mobileStatus])


  useEffect(() => {
    getDocuments('blog',
                 setPosts);
    getImage('donromaniello',
             'bio/images/small/',
             setPreCachedHeadshot)
  }, [])


  return (
    <ChakraProvider theme={theme}>
        <TopBar
          posts={posts}
          setPreCachedThumbnails={setPreCachedThumbnails}
        />
        <BottomParts
          posts={posts}
          preCachedHeadshot={preCachedHeadshot}
          preCachedThumbnails={preCachedThumbnails}
        />
    </ChakraProvider>
  );
}

export default App;
