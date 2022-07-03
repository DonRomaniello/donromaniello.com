import React, {useEffect} from 'react'

import { Link } from "react-router-dom";

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

  const isMobile = useSelector(selectIsMobile);

  const cardDimensions = isMobile ?  '80vw' : '40vw'

  return (

    <>
    <WrapItem>
      <Link to={`/projects/${project.title}`} >
        <VStack
        padding='2vw'
        // spacing='10vw'
        w={cardDimensions}
        h={cardDimensions}
        transition='border .2s'
        borderBottom='1px'
        borderRight='1px'
        borderColor={colorMode === "dark" ? "darkBlue.700" : 'lightBlue.200'}
        _hover={{
          borderBottom:'1px', borderRight:'1px'
          }}>

        <Box>
          <Heading
          fontSize={isMobile ? '1em' : '1.5em'}
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
      </Link>
    </WrapItem>
    </>


  )
}

export default ProjectCard;
