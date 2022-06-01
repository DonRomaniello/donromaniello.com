import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  useDisclosure
} from '@chakra-ui/react';

function NavLinks (props) {

  const { content, idx } = props;

  // const { isOpen, onToggle } = useDisclosure()

  return (
    <>
    <div key={idx}>
      <Button
      size='lg'
      margin='10px'
      colorScheme='darkBlue'
      >{content}</Button>
      </div>
    </>
  )
}

export default NavLinks;
