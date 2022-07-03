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
  selectProjects,
} from './store/features/projectList';

import {

} from '@chakra-ui/react'

import Stack from './Stack';

function Project() {

  const { name } = useParams();

  const projects = useSelector(selectProjects)

  const isMobile = useSelector(selectIsMobile);

  const dispatch = useDispatch();

  const [project, setProject] = useState({});

  useEffect(() => {
    dispatch(setTitleAddendum(name))
  }, [])


  useEffect(() => {
    if (projects.length){
      projects.forEach((item) => {
        if (item.title === name){
          setProject(item)
        }
      })
    }
    console.log("running", name, projects)
  }, [])






  return (
    <>
    <Stack stack={project.techStack} />
    </>
  )
}

export default Project
