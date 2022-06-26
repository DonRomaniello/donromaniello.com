import React, {useEffect} from 'react'

import { useDispatch } from 'react-redux';

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

import {
  setTitleAddendum,
} from './store/features/titleAddendum'

function Projects () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAddendum('Projects'))
  }, [])

  let punchList = [];

  for (let i = 0; i < 50; i++){
    punchList.push(i)
  }



  return (
    <Flex
    h='max-content'
    direction='column'
    >
      <Box>
        <Heading>
          Projects
        </Heading>
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
          {punchList.map((item) => {
            return (
            <ListItem key={item}>
              {item}. Lazy load components; track speed improvements
            </ListItem>)
          })}
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
      </Flex>

    </Flex>
  )
}

export default Projects;
