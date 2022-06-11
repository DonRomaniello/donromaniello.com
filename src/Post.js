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

function Post(props) {

  const { name } = useParams();

  const { posts, preLoadedThumbnail } = props;

  const [post, setPost] = useState({
    title: '',
    imageUrl: '',
    content: []
  })

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



  })

  return (
    <>
    <Center>
      <Heading>{post.title}</Heading>
    </Center>
    <Box w="100%" h='2vw' />
    <Skeleton isLoaded>
      <Center>
        <Image
        fallbackSrc={preLoadedThumbnail}
        // src={post.imageUrl}
        src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Afonso_01_1846.png'
        maxWidth='62%'
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
