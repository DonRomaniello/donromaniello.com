import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';

import {
  Center,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/react';

import {
  setTitleAddendum,
} from './store/features/titleAddendum'


import {
  fetchProjects,
  selectProjects,
} from './store/features/projectList';

import ProjectCard from './ProjectCard';


function Projects () {

  const dispatch = useDispatch();

  const projects = useSelector(selectProjects)

  useEffect(() => {
    dispatch(setTitleAddendum("Projects"))
    dispatch(fetchProjects())
  }, [])

  return (
   <>
    <Center>
    <Heading
    // padding='2vw'
    >
      Projects
    </Heading>
    </Center>
    <Wrap
    paddingBottom='1vw'>
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
