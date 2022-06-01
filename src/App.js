import React, {useState, useEffect} from 'react';
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  CircularProgress,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react';

import theme from './config/theme'

import NavDrawer from './NavDrawer';



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
      <Flex gap={divGap}
        bg='white'
        h='5vw'
        minHeight={navverMinDimension}
        // position='fixed'
      >
          <Box
            bg='white'
            w='5vw'
            minWidth={navverMinDimension}
            borderRadius="10px"
            shadow='sm'
            >
              <Center w='100%' h='100%'>
            <CircularProgress
            padding="19%"
            thickness='11px'
            size="100%"
            capIsRound='true'
            value={80}
             />
            </Center>
            {/* <CircularProgress isIndeterminate color="green.300" /> */}
          </Box>

          <Box
           bg='white'
           flex='1'
           borderRadius="10px"
           shadow='sm'
           >2</Box>

      </Flex>

      <Box w="100%" h={divGap} />

      <Flex
      h='95vh'
      gap={divGap}>
          <Box
          // bgGradient='linear(to-l, white, lightBlue.200)'
          w='5vw'
          minWidth={navverMinDimension}
          onClick={onToggle}
          overflow="hidden"
          onMouseEnter={onToggle}
          shadow='sm'
          borderRadius="10px"
           >
            <NavDrawer contentLinks={contentLinks} onToggle={onToggle} isOpen={isOpen} />
          </Box>
          <Box
          //  bg='lightBlue.200'
          //  bgGradient='linear(white 50%, lightBlue.200)'
           flex='1'
           overflow="hidden"
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
