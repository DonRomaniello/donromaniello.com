import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import {
  Box,
  Center,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

function Post(props) {

  const { name } = useParams();

  const { posts } = props;

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

  // console.log(posts, name, post)

  return (
    <>
    <Box w="100%" h='5vw' />
    <Center>
      <Heading>{post.title}</Heading>
    </Center>
    <Box w="100%" h='2vw' />
    <Center>
    <Image
    src={post.imageUrl}
    maxWidth='62%'
    borderRadius='1%'
    />
    </Center>
    <Box w="100%" h='3vw' />
    <Center>
    <Box
    w='50%'
    >
    {post.content.map((paragraph) => {
      return (
        <Text>
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
