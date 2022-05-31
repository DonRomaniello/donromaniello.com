import React, { useState, useEffect } from 'react';

import {
  Box,
  Fade,
  Button,
  useDisclosure
} from '@chakra-ui/react';

function FadeBar () {

  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </Fade>
    </>
  )
}

export default FadeBar;
