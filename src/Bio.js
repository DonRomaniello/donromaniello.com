import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  setTitleAddendum,
} from './store/features/titleAddendum'

import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Tooltip
} from '@chakra-ui/react'

import { getImage } from './modules/index.js';

import getDocuments from './modules/getDocuments';


function Bio(props) {

  const dispatch = useDispatch();

  const isMobile = useSelector(selectIsMobile);

  const { preCachedHeadshot } = props;

  const [headerImageURL, setHeaderImageURL] = useState('');

  const [post, setPost] = useState([
    {
      title: '',
      content: []
    }
  ])

  useEffect(() => {
    dispatch(setTitleAddendum("Bio"))
  }, [])

  useEffect(() => {
      getImage('donromaniello', '/bio/images/full', setHeaderImageURL)
      getDocuments('bio', setPost)
  }, [])

  return (
    <>
    <Center
    align='center'
    >
      <Heading>{post.title}</Heading>
    </Center>
    <Box w="100%" h='2vw' />
      <Center w='100%'>
        <Image
        fallbackSrc={preCachedHeadshot}
        src={headerImageURL}
        maxW='500px'
        objectFit='scale-down'
        borderRadius='50%'
        />
      </Center>
    <Box w="100%" h='3vw' />
    <Center>
    <Box
    maxWidth={isMobile ? '90%' : '600px'}
    >
    {post[0].content.map((paragraph) => {
      return (
        <Text key={paragraph.slice(0, 32)}>
          {paragraph}
          <br />
          <br />
        </Text>
      )
    })}
    </Box>
    </Center>
    </>
  )
}

export default Bio
