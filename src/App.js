import React from 'react';

import {
  ChakraProvider,
  Flex,

} from '@chakra-ui/react';


import theme from './config/theme'

import TopBar from './TopBar'

import BottomParts  from './BottomParts'

function App() {

  const divGap = 2;

  const navverMinDimension = 10

  return (
    <ChakraProvider theme={theme}>
        <TopBar
        navverMinDimension={navverMinDimension}
        divGap={divGap}
        />
        <BottomParts
        navverMinDimension={navverMinDimension}
        divGap={divGap} />
    </ChakraProvider>
  );
}

export default App;
