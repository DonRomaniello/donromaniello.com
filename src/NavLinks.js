import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Routes, Route } from 'react-router-dom';

import Post from './Post'


import {
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react';

function NavLinks (props) {

  const { post, setSelectedPost } = props;

  return (
    <>
    <div>
    <Link to={`/blog/${post.title}`} onClick={setSelectedPost(post)}>
      <Text
      size='md'
      fontSize='2vw'
      margin='10px'
      >{post.title}
      </Text>
      </Link>
      </div>
    </>
  )
}

export default NavLinks;
