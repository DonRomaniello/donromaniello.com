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
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

import Stack from './Stack';

function Project() {

  const { name } = useParams();

  const project = useSelector(selectProject)

  const isMobile = useSelector(selectIsMobile);

  const dispatch = useDispatch();

  // const [project, setProject] = useState({});

  useEffect(() => {
    dispatch(setTitleAddendum(name))
  }, [])


  useEffect(() => {
    dispatch(fetchProject({matchField: 'title',
                           matchStatement: name}))
  }, [name])

  // console.log("running", name, project)





  return (
    <>
    <Center>
    <VStack>
    <Box
    borderBottom='1px'>
    <Heading>
      {name}
    </Heading>
    </Box>
    <Text
    padding='2vh'
    maxW='66%'>
      {project.longDescription}
    </Text>
    <Box
    borderBottom='1px'>
    <Heading
    size='md'>
      The Stack
    </Heading>
    </Box>
    <Stack stack={project.techStack} />
    <Link href={project.github} isExternal>
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
