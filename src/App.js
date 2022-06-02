import React, {useState, useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';

import {
  Box,
  ChakraProvider,
  Flex,
  useDisclosure
} from '@chakra-ui/react';

import theme from './config/theme'

import NavDrawer from './NavDrawer';

import TopBar from './TopBar'

import Home from './Home'



function App() {

  const divGap = 2;

  const navverMinDimension = 10

  const [isNavverHorizontal, setIsNavverHorizontal] = useState(true);

  const [contentLinks, setContentLinks] = useState(['Go Here',
                                                   'Further Reading',
                                                  'Undsoweider'])

  const { isOpen, onToggle } = useDisclosure()

  const changeNavOrientation = () => {
   setIsNavverHorizontal(!isNavverHorizontal)
  }

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
              <NavDrawer contentLinks={contentLinks} onToggle={onToggle} isOpen={isOpen} />
          </Box>
          <Box
           flex='1'
           overflow="hidden"
           borderRadius="10px"
           shadow='md'
           >
          <Routes>
          <Route exact path="/" element={<Home />} />
          </Routes>
          </Box>
      </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
