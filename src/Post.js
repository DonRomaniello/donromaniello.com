import React, { useState, useEffect } from 'react';

import {
  Text
} from '@chakra-ui/react'

function Post(props) {

  const { post } = props

  console.log("Post", post)

  return (
    <Text>
      Reaching.
    </Text>
  )




}

export default Post
