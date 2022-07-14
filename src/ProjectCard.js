import React, {useEffect, useState} from 'react'

import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  Box,
  Container,
  Heading,
  Image,
  useColorMode,
  VStack,
  WrapItem,
} from '@chakra-ui/react';

import { getImage } from './modules/index.js';

import { makeUrlFriendly } from './modules/makeUrlFriendly';

function ProjectCard(props){

  const {project} = props

  const {colorMode} = useColorMode();

  const isMobile = useSelector(selectIsMobile);

  const [thumbnail, setThumbnail] = useState()

  const cardDimensions = isMobile ?  '80vw' : '40vh'

  const imageDimensions = isMobile ?  '40vw' : '20vh'

  useEffect(() => {
    getImage(makeUrlFriendly(project.title),
     '/projects/images/small',
      setThumbnail)
  }, [])


  return (

    <>
    <WrapItem>
      <Link to={`/projects/${project.title}`} >
        <VStack
        padding='2vh'
        w={cardDimensions}
        h={cardDimensions}
        borderRadius='2%'
        bg='card.10'
        _hover={{
          bg:'card.40',
          }}
        transition='background 2s'
          >
          <Image
          src={thumbnail}
          maxH={imageDimensions}
          paddingBottom='2vh'
          />
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
