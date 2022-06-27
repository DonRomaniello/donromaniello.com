import React, {useEffect} from 'react'

import { useDispatch } from 'react-redux';

import {
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';

import {
  setTitleAddendum,
} from './store/features/titleAddendum'

function Projects () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAddendum("Projects"))
  }, [])

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
          To be completed...
        </Text>
        </Box>
    </Flex>
  )
}

export default Projects;
