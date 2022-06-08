import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { Routes, Route } from 'react-router-dom';

import Post from './Post'


import {
  Text,
} from '@chakra-ui/react';

function NavLinks (props) {

  const { post } = props;

  const resetScroll = () => {
    window.scrollTo(0,0)
  }

  return (
    <>
    <div>
    <Link to={`/blog/${post.title}`} >
      <Text
        fontSize={{ base: '2vw', sm: '3vw', lg:'2vw' }}
        margin='10px'
        onClick={resetScroll}
      >{post.title}
      </Text>
      </Link>
      </div>
    </>
  )
}

export default NavLinks;
