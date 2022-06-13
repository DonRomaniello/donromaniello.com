import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";

import {
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack
} from '@chakra-ui/react'

import getImage from './modules/getImage';

import NavLinks from './NavLinks';

function BlogPopover(props) {

  const { posts,
          setPreCachedThumbnail } = props;

  return (
    <>
    <Popover
    trigger='hover'
    openDelay='0'
    isLazy='true'
    >
      <PopoverTrigger>
        <Link to='/blog'>Blog</Link>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <Center>
          <VStack>
          {posts.length ? posts.map((post, idx) =>  {
              return (
                <PopoverBody
                key={idx}
                onMouseOver={() => getImage(post.title, '/blog/images/small', setPreCachedThumbnail)}
                >
                  <NavLinks
                  id={idx}
                  post={post}
                  directory='blog'/>
                  </PopoverBody>)
            }) : ''}
          </VStack>
        </Center>
      </PopoverContent>
</Popover>
    </>
  )

}

export default BlogPopover
