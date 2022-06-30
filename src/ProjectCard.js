import React, {useEffect} from 'react'

import { useDispatch } from 'react-redux';

import {
  Box,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react';

function ProjectCard(props){

  const {project} = props

  return (

    <>
    <Heading>
      {project.title}
    </Heading>


    <Box>
      Here
    </Box>


    </>


  )
}

export default ProjectCard;
