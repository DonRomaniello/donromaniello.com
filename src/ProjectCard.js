import React, {useEffect} from 'react'

import { useDispatch } from 'react-redux';

import {
  Box,
  Center,
  Heading,
  Text,
  WrapItem,
} from '@chakra-ui/react';

function ProjectCard(props){

  const {project} = props

  return (

    <>
    <WrapItem>
      <Center
      w='33vw'
      h='33vw'
      shadow='md'
      borderRadius='10px'
      _hover={{shadow:'lg'}}>
      <Heading>
        {project.title}
      </Heading>
      </Center>
    </WrapItem>
    </>


  )
}

export default ProjectCard;
