import React, { useState, useEffect } from 'react';

import {
  Box,
  Fade,
  Button,
  useDisclosure
} from '@chakra-ui/react';

function FadeBar (props) {

  const { content, idx } = props;

  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
    <div key={idx}>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen} unmountOnExit={true} reverse={true}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          {content}
        </Box>
      </Fade>
      </div>
    </>
  )
}

export default FadeBar;
