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
} from '@chakra-ui/react';

import { Logo } from './Logo';
import Navver from './Navver'

function App() {

  const [isNavverHorizontal, setIsNavverHorizontal] = useState(true);

  const changeNavOrientation = () => {
   setIsNavverHorizontal(!isNavverHorizontal)
  }


  return (
    <ChakraProvider theme={theme}>
      <Flex color='white' gap='2'>
          <Box bg='red.200' w='10vh' h='10vh'>1</Box>
          <Box bg='green.200' flex='1' h='10vh'>2</Box>
          {/* <Box bg='blue.200' w='10vh' h='90vh'></Box>
          <Box bg='yellow.200' grow='1' h='90vh'></Box> */}
      </Flex>
      <Box w="100%" h='2' />
      <Flex color='white' gap='2'>
          <Box bg='blue.200' w='10vh' h='90vh'>3</Box>
          <Box bg='yellow.200' flex='1' h='90vh'>4</Box>
      </Flex>


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
