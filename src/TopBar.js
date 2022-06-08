import React, {useState, useEffect} from 'react';

import {
  Box,
  Center,
  Flex,
  Heading,
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';

function TopBar(props) {

  const { navverMinDimension, isMediaQuery }  = props;


  return (
    <>
    <Box w="100%" bg='white'>
    <Flex
        bg='rgba(255, 255, 255, 16)'
        backdropFilter='blur(50px)'
        position='fixed'
        top='0'
        minHeight={navverMinDimension}
      >
          <Box
            w={navverMinDimension}
            shadow='md'
            >
              {/* <Center w='100%' h='100%'> */}
                <ProgressHamburger />
              {/* </Center> */}
          </Box>
          <Flex
           shadow='md'
           w='100vw'
           alignItems='center'
           >
             <Heading
             paddingLeft='1vw'
             maxH='62%'
             >
               Don Romaniello's .com
             </Heading>
           </Flex>

      </Flex>
      </Box>
      </>
  )

}

export default TopBar
