import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Spacer,
  Code,
  Flex,
  SimpleGrid,
  Container,
  GridItem,
  theme,
  useDisclosure
} from '@chakra-ui/react';

import { Logo } from './Logo';
import Navver from './Navver'

function App() {

  const divGap = 2;

  const navverMinDimension = 100

  const [isNavverHorizontal, setIsNavverHorizontal] = useState(true);

  const [contentLinks, setContentLinks] = useState(['Go Here',
                                                   'Further Reading'])

  const changeNavOrientation = () => {
   setIsNavverHorizontal(!isNavverHorizontal)
  }

  const { sideOpen, sideOpenToggle } = useDisclosure()


  return (
    <ChakraProvider theme={theme}>
      <Box margin='10px' h='100vh'>
      <Flex color='white' gap={divGap}>
          <Box bg='red.200'
            w='5vw'
            h='5vw'
            minWidth={navverMinDimension}
            minHeight={navverMinDimension}
            borderRadius="10px"
            >

          </Box>

          <Box
           bg='green.200'
           flex='1'
           h='5vw'
           minHeight={navverMinDimension}
           borderRadius="10px"
           >2</Box>

      </Flex>

      <Box w="100%" h={divGap} />

      <Flex color='white' gap={divGap}>
          <Box
           bg='blue.200'
           w='5vw'
           h='100vh'
           minWidth={navverMinDimension}
          //  onMouseEnter={sidebarActive}
           borderRadius="10px"
           >
             3
          </Box>
          <Box
           bg='yellow.200'
           h='100vh'
           flex='1'
           borderRadius="10px"
           >
             4
          </Box>
      </Flex>
      </Box>


      {/* <Grid
        // minH="100vh"
        gap="2vh"
        >
        <GridItem h='10vh' colSpan={2} bg='yellow.200' />
        <GridItem h='90vh' w='10vw' rowSpan={2} colSpan={1} bg='blue.200' />
        <GridItem w='90vw' rowSpan={2} bg='red.200' />
      </Grid> */}
      {/* </Box> */}
    </ChakraProvider>
  );
}

export default App;
