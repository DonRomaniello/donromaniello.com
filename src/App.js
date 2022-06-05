import React from 'react';

import {
  ChakraProvider,
  Flex,

} from '@chakra-ui/react';


import theme from './config/theme'

import TopBar from './TopBar'

import BottomParts  from './BottomParts'

function App() {

  const navverMinDimension = '8vw'

  return (
    <ChakraProvider theme={theme}>
        <TopBar
        navverMinDimension={navverMinDimension}
        />
        <BottomParts
        navverMinDimension={navverMinDimension}
         />
    </ChakraProvider>
  );
}

export default App;
