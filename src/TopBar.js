import React, {useState, useEffect} from 'react';
import {
  Box,
  Center,
  CircularProgress,
  Flex,
} from '@chakra-ui/react';

function TopBar(props) {

  const divGap = 2;

  const navverMinDimension = 10

  return (
    <Flex
        backdropFilter='blur(20px)'
        gap={divGap}
        position='fixed'
        top={divGap}
        left={divGap}
        right={divGap}
        h='5vw'
        minHeight={navverMinDimension}
      >
          <Box
            w='5vw'
            minWidth={navverMinDimension}
            borderRadius="10px"
            shadow='md'
            >
              <Center w='100%' h='100%'>
            <CircularProgress
            padding="19%"
            thickness='11px'
            size="100%"
            capIsRound='true'
            value={80}
             />
            </Center>
            {/* <CircularProgress isIndeterminate color="green.300" /> */}
          </Box>

          <Box
           flex='1'
           borderRadius="10px"
           shadow='md'
           >2</Box>

      </Flex>
  )

}

export default TopBar
