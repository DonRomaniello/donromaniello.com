import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Stack,
  Code,
  Grid,
  theme,
  useFocusEffect,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Header(props) {

  const [isHeaderHorizontal, setIsHeaderHorizontal] = useState(true);

  const changeNavOrientation = () => {
   setIsHeaderHorizontal(!isHeaderHorizontal)
  }


  return (
    <Stack direction={(isHeaderHorizontal) ? 'column' : 'row'}>
      <Box h='40px' w='40px' bg='yellow.200'
      onClick={changeNavOrientation}>
        1
      </Box>
      <Box h='40px' w='40px' bg='gray.200'>
        2
      </Box>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Stack>

  )
}

export default Header;
