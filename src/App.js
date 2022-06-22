import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
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


  const mobileStatus = useMediaQuery("(max-width: 768px)")?.[0]

  const isMobile = useSelector(selectIsMobile);

  // const navverMinDimension = (isMobile ? '50px' : '100px')
  const navverMinDimension = '100px'

  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  const [preCachedThumbnails, setPreCachedThumbnails] = useState({});

  const [preCachedHeadshot, setPreCachedHeadshot] = useState();

  useEffect(() => {

    console.log("DISPATCHED!")
    console.log(mobileStatus)

    window.addEventListener('resize',
    dispatch(setIsMobile(mobileStatus)))
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
          // isMobile={isMobile}
          navverMinDimension={navverMinDimension}
          posts={posts}
          setPreCachedThumbnails={setPreCachedThumbnails}
        />
        <BottomParts
          // isMobile={isMobile}
          navverMinDimension={navverMinDimension}
          posts={posts}
          preCachedHeadshot={preCachedHeadshot}
          preCachedThumbnails={preCachedThumbnails}
        />
    </ChakraProvider>
  );
}

export default App;
