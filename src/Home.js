import React from 'react'

import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

function Home () {

  return (
    <Box
    h={window.innerHeight}
    >
      {/* <Heading>
        Welcome.
      </Heading> */}
      <Text
      mt='10px'
      mb='10px'>
        In the spirit of rapid iteration, this page is published very much as
        a work in progress.
      </Text>
      <Text>
        You're looking at Chakra UI in a React.js frontend with a Firebase backend.
      </Text>
    <Flex
      gap='10px'
      >
      <Link href='https://github.com/DonRomaniello' isExternal>
        <Button>
          My GitHub
        </Button>
      </Link>
      <Link href='https://www.linkedin.com/in/don-romaniello/' isExternal>
        <Button>
          LinkedIn
        </Button>
      </Link>
    </Flex>
      <ColorModeSwitcher align="flex-end" />
    </Box>
  )
}

export default Home;
