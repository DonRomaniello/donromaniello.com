import React from 'react';

import {
  ChakraProvider,
  useMediaQuery
} from '@chakra-ui/react';


import theme from './config/theme'

import TopBar from './TopBar'

import BottomParts  from './BottomParts'

function App() {

  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const navverMinDimension = '8vw'

  return (
    <ChakraProvider theme={theme}>
        <TopBar
        navverMinDimension={navverMinDimension} isMobile={isMobile}
        />
        <BottomParts
        navverMinDimension={navverMinDimension} isMobile={isMobile}
         />
    </ChakraProvider>
  );
}

export default App;
