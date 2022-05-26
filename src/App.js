import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react';

import { Logo } from './Logo';
import Header from './Header'

function App() {

  const [isHeaderHorizontal, setIsHeaderHorizontal] = useState(true);

  const changeNavOrientation = () => {
   setIsHeaderHorizontal(!isHeaderHorizontal)
  }


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Header orientation={isHeaderHorizontal}/>
            <Logo h="40vmin" pointerEvents="none" />
            <Text onClick={changeNavOrientation}>
              Edit <Code fontSize="xl">src/App.js</Code> and {String(isHeaderHorizontal)}.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
