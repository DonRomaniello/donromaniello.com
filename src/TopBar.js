import React, {useState, useEffect} from 'react';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';

function TopBar(props) {

  const { navverMinDimension, isMediaQuery }  = props;

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Box w="100%" bg='white'>
      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
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
            onClick={onOpen}
            >
            <ProgressHamburger />
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
