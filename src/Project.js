import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  setTitleAddendum,
} from './store/features/titleAddendum'

import {
  fetchProject,
  selectProject,
} from './store/features/singleProject';

import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'

import Stack from './Stack';

function Project() {

  const { name } = useParams();

  const project = useSelector(selectProject)

  const isMobile = useSelector(selectIsMobile);

  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(setTitleAddendum(name))
  }, [])


  useEffect(() => {
    dispatch(fetchProject({matchField: 'title',
                           matchStatement: name,
                          }))
  }, [name, dispatch])



  return (
    <>
    <Center>
      <VStack>
        <Box
        borderBottom='1px'>
        <Skeleton
        fadeDuration={'3'}
        isLoaded
        >
          <Heading>
            {name}
          </Heading>
          </Skeleton>
        </Box>
        <Center>
        <Skeleton
        borderRadius='2vh'
        isLoaded={isLoaded}
        w={isMobile ? '100%' : '80vh'}
        h={isMobile ? '100%' : '80vh'}
        >
        <Center>
        <Image
        src={project?.headerImage}
        onLoad={() => {setIsLoaded(true)}}
        maxW={isMobile ? '100%' : '80vh'}
        maxH={isMobile ? '100%' : '80vh'}
        objectFit='scale-down'
        borderRadius='2vh'
        border='1px'
        />
        </Center>
        </Skeleton>
        </Center>
      <Text
      padding='2vh'
      maxW={isMobile ? '100%' : '80%'}>
        {project.data.longDescription}
      </Text>
      <Box
      borderBottom='1px'>
        <Heading
        size='md'>
          The Stack
        </Heading>
      </Box>
      <Stack stack={project.data.techStack} />
      <Link href={project.data.github} isExternal>
        <Button>
          The Code
        </Button>
      </Link>
      </VStack>
    </Center>
    </>
  )
}

export default Project
