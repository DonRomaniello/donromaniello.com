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

  const { posts,
          preCachedThumbnail} = props;

  const [post, setPost] = useState({
    title: '',
    imageAttribution: '',
    content: []
  })

  const [headerImageURL, setHeaderImageURL] = useState('');

  useEffect(() => {
    setHeaderImageURL('');
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
    <Center>
      <Heading>{post.title}</Heading>
    </Center>
    <Box w="100%" h='2vw' />
    <Skeleton isLoaded>
      <Center>
        <Image
        fallbackSrc={preCachedThumbnail}
        src={headerImageURL}
        w='62%'
        borderRadius='1%'
        />
      </Center>
    </Skeleton>
    <Box w="100%" h='3vw' />
    <Center>
    <Box
    w='50%'
    >
    {post.content.map((paragraph, idx) => {
      return (
        <Text key={idx}>
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
