import React, {useEffect} from 'react'

import { useSelector } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  Box,
  Container,
  Heading,
  useColorMode,
  VStack,
  WrapItem,
} from '@chakra-ui/react';

function ProjectCard(props){

  const {project} = props

  const {colorMode} = useColorMode();

  // console.log(project.techStack)

  const isMobile = useSelector(selectIsMobile);

  const cardDimensions = isMobile ?  '80vw' : '40vw'

  return (

    <>
    <WrapItem>
      <VStack
      padding='2vw'
      spacing='10vw'
      w={cardDimensions}
      h={cardDimensions}
      shadow='md'
      borderRadius='10px'
      bg={colorMode === "dark" ? "darkBlue.700" : 'lightBlue.200'}
      _hover={{shadow:'lg'}}>

      <Box>
        <Heading
        fontSize={isMobile ? '1em' : '2em'}
        >
          {project.title}
        </Heading>
      </Box>

      <Box>
        <Container>
          {project.shortDescription}
        </Container>
      </Box>

      </VStack>
    </WrapItem>
    </>


  )
}

export default ProjectCard;
