import React from 'react'

import {
  Box,
  Button,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap
} from '@chakra-ui/react';

function Home () {

  return (
    <VStack>
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
        <Heading
        size='md'
        padding='2vh'>
          To Do...
        </Heading>
        <UnorderedList
        padding='2vh'>
          <ListItem>
            Move database/storage calls to redux store.
          </ListItem>
          <ListItem>
            Fill out Projects page.
          </ListItem>
          <ListItem>
            Work on Redux store hooks for page changes.
          </ListItem>
          <ListItem>
            Move CSS off components.
          </ListItem>
          <ListItem>
            Add accessibility info for reader
          </ListItem>
          <ListItem>
            DRY as much as possible
          </ListItem>
        </UnorderedList>
          <Wrap
            justify='center'>
        <Link href='https://github.com/DonRomaniello' isExternal>
          <Button>
            My GitHub
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/don-romanielloo/' isExternal>
          <Button>
            LinkedIn
          </Button>
        </Link>
        <Link href="mailto:don.romaniello+website@gmail.com" isExternal>
          <Button>
            Email
          </Button>
        </Link>
      </Wrap>
    </VStack>
  )
}

export default Home;
