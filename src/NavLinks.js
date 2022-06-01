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
    <div>
      <Button
      w="62%"
      size='md'
      margin='10px'
      >{content}
      </Button>
      </div>
    </>
  )
}

export default NavLinks;
