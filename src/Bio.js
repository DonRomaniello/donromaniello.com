import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import {
  Box,
  Center,
  Heading,
  Image,
  Skeleton,
  Text,
} from '@chakra-ui/react'

import getImage from './modules/getImage';

function Bio(props) {


  const { isMobile } = props;

  const [headerImageURL, setHeaderImageURL] = useState('');

  const [post, setPost] = useState({
    title: '',
    content: []
  })

  useEffect(() => {
      getImage('donromaniello', '/bio/images/full', setHeaderImageURL)
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
        // fallbackSrc={preCachedThumbnail}
        src={headerImageURL}
        objectFit='scale-down'
        w='600px'
        h='600px'
        borderRadius='50%'
        />
      </Center>
    <Box w="100%" h='3vw' />
    <Center>
    <Box
    maxWidth={isMobile ? '90%' : '600px'}
    >
    {/* {post.content.map((paragraph) => {
      return (
        <Text key={paragraph.slice(0, 32)}>
          {paragraph}
          <br />
          <br />
        </Text>
      )
    })} */}
    </Box>
    </Center>
    </>
  )
}

export default Bio
