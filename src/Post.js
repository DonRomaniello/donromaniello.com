import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import {
  Text
} from '@chakra-ui/react'

function Post(props) {

  const { name } = useParams();

  const { posts } = props;

  const [post, setPost] = useState({
    title: '',
    imageUrl: '',
    content: ''
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

  console.log(posts, name, post)

  return (
    <Text>
      {post.content}
    </Text>
  )




}

export default Post
