import React, {useState, useEffect} from 'react';

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

  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const navverMinDimension = (isMobile ? '50px' : '100px')

  const [posts, setPosts] = useState([]);

  const [preCachedThumbnails, setPreCachedThumbnails] = useState({});

  const [preCachedHeadshot, setPreCachedHeadshot] = useState();

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
        isMobile={isMobile}
        navverMinDimension={navverMinDimension}
        posts={posts}
        setPreCachedThumbnails={setPreCachedThumbnails}
        />
        <BottomParts
        isMobile={isMobile}
        navverMinDimension={navverMinDimension}
        posts={posts}
        preCachedHeadshot={preCachedHeadshot}
        preCachedThumbnails={preCachedThumbnails}
         />
    </ChakraProvider>
  );
}

export default App;
