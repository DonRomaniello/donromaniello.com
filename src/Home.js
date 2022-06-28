import React from 'react'

import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
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
        <Heading
        mt='30px'
        size='sm'>
          To Do...
        </Heading>
      </Box>
      <Spacer />
        <UnorderedList>
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
        <Link href="mailto:don.romaniello+website@gmail.com" isExternal>
          <Button>
            Email
          </Button>
        </Link>
        <Spacer />
      <ColorModeSwitcher />
      </Flex>
    </Flex>
  )
}

export default Home;
