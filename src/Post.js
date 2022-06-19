import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Tooltip
} from '@chakra-ui/react'

import getImage from './modules/getImage';

function Post(props) {

  const { name } = useParams();

  const { isMobile,
          posts,
          preCachedThumbnails } = props;

  const [post, setPost] = useState({
    title: '',
    imageAttribution: '',
    content: []
  })

  const [headerImageURL, setHeaderImageURL] = useState('');

  const [headerThumbnail, setHeaderThumbnail] = useState('/logo.svg');

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
      let thumbnailFilename = post.title.toLowerCase().split(' ').join('_')
      if (preCachedThumbnails){
        setHeaderThumbnail(preCachedThumbnails[thumbnailFilename + '.webp'])
      } else {
        getImage(thumbnailFilename, '/blog/images/small', setHeaderThumbnail)
      }
    }
    }, [post])

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
        <Tooltip
          label={post.imageAttribution}
          placement='bottom'
          openDelay={600}>
          <Image
          h={isMobile ? null : '500px' }
          fallbackSrc={headerThumbnail}
          src={headerImageURL}
          objectFit='scale-down'
          borderRadius='1%'
          />
        </Tooltip>
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
