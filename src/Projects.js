import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';

import {
  setTitleAddendum,
} from './store/features/titleAddendum'


import {
  fetchProjects,
  selectProjects,
} from './store/features/projectList';


function Projects () {

  const dispatch = useDispatch();

  const projects = useSelector(selectProjects)

  useEffect(() => {
    dispatch(setTitleAddendum("Projects"))
    dispatch(fetchProjects())
  }, [])


  console.log("length of porject list", projects)





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
