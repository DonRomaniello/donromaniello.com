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
          preCachedThumbnail } = props;

  const [post, setPost] = useState({
    title: '',
    imageAttribution: '',
    content: []
  })

  const [headerImageURL, setHeaderImageURL] = useState('');

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
      <Center
      >
        <Image
        h={isMobile ? null : '500px' }
        fallbackSrc={preCachedThumbnail}
        src={headerImageURL}
        objectFit='scale-down'
        borderRadius='1%'
        />
      </Center>
    <Box w="100%" h='3vw' />
    <Center>
    <Box>
    {post.content.map((paragraph) => {
      return (
        <Text
        mt='20px'
        key={paragraph.slice(0, 32)}>
          {paragraph}
        </Text>
      )
    })}
    </Box>
    </Center>
    </>
  )
}

export default Post
