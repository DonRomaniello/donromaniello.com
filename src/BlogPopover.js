import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";

import {
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

import { storage } from './config/firebase';

import { getBlob, getStorage, ref, listAll } from "firebase/storage";

import NavLinks from './NavLinks';

function BlogPopover(props) {

  const { posts, setPreLoadedThumbnail } = props;

  const getThumbnail = async (name) => {

    let fileName = name.toLowerCase().split(' ').join('_')

    let useUrl;

    getBlob(ref(getStorage(), `/blog/images/small/${fileName}.webp`))
    .then((blob) => {
      useUrl = URL.createObjectURL(blob);
      }).finally(() => {
        setPreLoadedThumbnail(useUrl);
      })
  }



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
                onMouseOver={() => getThumbnail(post.title)}
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
