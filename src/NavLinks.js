import React, { useState, useEffect } from 'react';

import {
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react';

function NavLinks (props) {

  const { post } = props;

  // const { isOpen, onToggle } = useDisclosure()

  return (
    <>
    <div>
      <Text
      // w="62%"
      // textShadow="0px 0px 1vh RGBA(255, 255, 255, 16)"
      size='md'
      fontSize='2vw'
      margin='10px'
      >{post.title}
      </Text>
      </div>
    </>
  )
}

export default NavLinks;
