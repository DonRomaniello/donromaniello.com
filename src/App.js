import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';

import theme from './config/theme'

import NavDrawer from './NavDrawer';

import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {

  const divGap = 2;

  const navverMinDimension = 100

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
      <Flex color='white' gap={divGap}>
          <Box
            w='5vw'
            h='5vw'
            minWidth={navverMinDimension}
            minHeight={navverMinDimension}
            borderRadius="10px"
            shadow='sm'
            >
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>

          <Box
           flex='1'
           h='5vw'
           minHeight={navverMinDimension}
           borderRadius="10px"
           shadow='sm'
           >2</Box>

      </Flex>

      <Box w="100%" h={divGap} />

      <Flex gap={divGap}>
          <Box
          // bgGradient='linear(to-l, white, lightBlue.200)'
           w='5vw'
           h='100vh'
           minWidth={navverMinDimension}
          onClick={onToggle}
          onMouseEnter={onToggle}
          shadow='sm'
          borderRadius="10px"
           >
            <NavDrawer contentLinks={contentLinks} onToggle={onToggle} isOpen={isOpen} />
          </Box>
          <Box
          //  bg='lightBlue.200'
          //  bgGradient='linear(white 50%, lightBlue.200)'
           h='100vh'
           flex='1'
           borderRadius="10px"
           shadow='sm'
           >
             Content
          </Box>
      </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
