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
        <Skeleton
        fadeDuration={'3'}
        isLoaded
        >
          <Heading>
            {name}
          </Heading>
          </Skeleton>
        <Center>
        <Skeleton
        borderRadius='5px'
        isLoaded={isLoaded}
        maxW={isMobile ? '100%' : '80vw'}
        maxH={isMobile ? '100%' : '80vh'}
        >
        <Center>
        <Image
        src={project?.headerImage}
        onLoad={() => {setIsLoaded(true)}}
        maxW={isMobile ? '100%' : '80vw'}
        maxH={isMobile ? '100%' : '80vh'}
        objectFit='scale-down'
        borderRadius='5px'
        // border='1px'
        />
        </Center>
        </Skeleton>
        </Center>
      <Text
      padding='2vh'
      w={isMobile ? '100%' : '80%'}>
        {project.data.longDescription}
      </Text>
        <Heading>
          The Stack
        </Heading>
      <Stack stack={project.data.techStack} />
      <Link href={project.data.github} isExternal>
        <Button
          variant={isMobile ? 'projectMobile' : 'project'}
        >
          The Code
        </Button>
      </Link>
      {project.data.liveUrl &&
      <Link href={project.data.liveUrl} isExternal>
        <Button
          variant={isMobile ? 'projectMobile' : 'project'}
        >
          Link
        </Button>
      </Link>}
      </VStack>
    </Center>
    </>
  )
}

export default Project
