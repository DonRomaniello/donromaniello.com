import React, {useState, useEffect} from 'react';
import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Heading,
} from '@chakra-ui/react';

function TopBar(props) {

  const { divGap, navverMinDimension }  = props;

  console.log("Passed divGap", divGap)

  return (
    <Flex
        bg='rgba(255, 255, 255, 16)'
        backdropFilter='blur(50px)'
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
           align='flex-start'
           borderRadius="10px"
           shadow='md'
           >
             <Heading
             marginLeft='1vw'
             >
               Don Romaniello's .com
             </Heading>
           </Box>

      </Flex>
  )

}

export default TopBar
