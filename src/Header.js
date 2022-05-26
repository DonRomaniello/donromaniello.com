import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Stack,
  Code,
  Grid,
  GridItem,
  theme,
  useFocusEffect,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Header(props) {

  const {orientation} = props;

  return (
    <Stack direction={(orientation) ? 'column' : 'row'}>
      <Box h='40px' w='40px' bg='yellow.200'>
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
