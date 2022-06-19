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

import getImages from './modules/getImages';

import NavLinks from './NavLinks';

function BlogPopover(props) {

  const { posts,
          preCachedThumbnails,
          setPreCachedThumbnails } = props;

  return (
    <>
    <Popover
    trigger='hover'
    openDelay='0'
    isLazy='true'
    onOpen={() => getImages('/blog/images/small', setPreCachedThumbnails)}
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
                >
                  <NavLinks
                  id={idx}
                  post={post}
                  preCachedThumbnails={preCachedThumbnails}
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
