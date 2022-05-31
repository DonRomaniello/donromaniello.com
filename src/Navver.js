import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

function Navver(props) {

  const boxContents = [1, 2, 3, 4, 5, 6]

  const {isNavverHorizontal} = props;

  return (
    <Stack direction={(isNavverHorizontal) ? 'column' : 'row'}>
      {boxContents.map((contents, idx) => {
        return (
        <Box h='40px' w='40px' bg='yellow.200'
          borderRadius='5px'
          key={contents}>
          {contents}
        </Box>)
          })}
      <ColorModeSwitcher justifySelf="flex-end" />
    </Stack>
  )
}

export default Navver;
