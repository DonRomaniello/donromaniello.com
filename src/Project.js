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

  console.log("running", name, project)





  return (
    <>
    <Stack stack={project.techStack} />
    </>
  )
}

export default Project
