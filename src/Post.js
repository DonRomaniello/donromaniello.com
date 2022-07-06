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

  const isMobile = useSelector(selectIsMobile);

  const { posts,
          preCachedThumbnails } = props;

  const [post, setPost] = useState({
    title: '',
    imageAttribution: '',
    content: []
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleAddendum(name))
  }, [name])

  const [headerImageURL, setHeaderImageURL] = useState('');

  const [headerThumbnail, setHeaderThumbnail] = useState('/logo.svg');

  useEffect(() => {
    let thumbnailFilename = name.toLowerCase().split(' ').join('_')
    if (preCachedThumbnails){
      setHeaderThumbnail(preCachedThumbnails[thumbnailFilename + '.webp'])
    } else {
      getImage(name, '/blog/images/small', setHeaderThumbnail)
    }
  }, [name, post])

  useEffect(() => {
    getImage(name, '/blog/images/full', setHeaderImageURL)
  }, [name, post])

  useEffect(() => {
    if (posts.length){
      posts.forEach((item) => {
        if (item.title === name){
          setPost(item)
        }
      })
    }
  }, [name, posts])

  return (
    <>
    <Center
    align='center'
    >
      <Box
      borderBottom='1px'
      paddingBottom='2vh'
      >
      <Heading>{post.title}</Heading>
      </Box>
    </Center>
    <Box w="100%" h='2vh' />
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
