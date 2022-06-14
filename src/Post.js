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

function Post(props) {

  const { name } = useParams();


  const { isMobile,
          posts,
          preCachedThumbnails} = props;

  const [post, setPost] = useState({
    title: '',
    imageAttribution: '',
    content: []
  })

  const [headerImageURL, setHeaderImageURL] = useState('');

  // useEffect(() => {
  //   setHeaderImageURL('');
  // }, [name])

  useEffect(() => {
    console.log(preCachedThumbnails)
  }, [])


  useEffect(() => {
    if (posts.length){
      posts.forEach((item) => {
        if (item.title === name){
          setPost(item)
        }
      })

    }
  }, [name, posts])

  useEffect(() => {
    if (post.title) {
      getImage(post.title, '/blog/images/full', setHeaderImageURL)
    }
  }, [post])



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
        w='80%'
        h='600px'
        borderRadius='1%'
        />
      </Center>
    <Box w="100%" h='3vw' />
    <Center>
    <Box
    maxWidth={isMobile ? '90%' : '600px'}
    >
    {post.content.map((paragraph) => {
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

export default Post
