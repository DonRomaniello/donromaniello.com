import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Center,
  Heading,
  Wrap,
} from '@chakra-ui/react';

import {
  setTitleAddendum,
} from './store/features/titleAddendum'

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  fetchProjects,
  selectProjects,
} from './store/features/projectList';

import ProjectCard from './ProjectCard';

function Projects () {

  const dispatch = useDispatch();

  const projects = useSelector(selectProjects)

  // const projectThumbnails = useSelector(selectProjectThumbnails)

  const isMobile = useSelector(selectIsMobile);

  useEffect(() => {
    dispatch(setTitleAddendum("Projects"))
    dispatch(fetchProjects())
    // dispatch(fetchProjectThumbnails())
  }, [dispatch])

  return (
   <>
    <Center
    paddingBottom='2vh'>
      <Heading>
        Projects
      </Heading>
    </Center>
    <Center>
    </Center>
    <Wrap
    paddingBottom='2vh'
    justify='center'
    maxW={isMobile ?  '100vw' : '100vh'}
    >
    {projects.length ? projects.map((project) => {
      if (project.shown){
        return (
        <ProjectCard project={project} key={project.title}/>
        )
      }
    }) : ''}
    </Wrap>
    </>
  )
}

export default Projects;
