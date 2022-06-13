import React from 'react'

import {
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  Text
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

function Home () {

  return (
    <Flex
    h='max-content'
    direction='column'
    >
      <Box>
        <Text
        mt='10px'
        mb='10px'>
          In the spirit of rapid iteration, this page is published very much as
          a work in progress.
        </Text>
        <Text>
          You're looking at Chakra UI in a React.js frontend with a Firebase backend.
        </Text>
      </Box>
      <Spacer />
      <Flex
        margin='10px'
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
        <Spacer />
      <ColorModeSwitcher />
      </Flex>

    </Flex>
  )
}

export default Home;
