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
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';

function TopBar(props) {

  const { navverMinDimension, isMediaQuery }  = props;

  const { isOpen, onToggle } = useDisclosure();

  const headerBg = useColorModeValue('rgba(255, 255, 255, .9)',
                                     'rgba(26, 32, 44, .9)')

  const [smoothOpen, setSmoothOpen] = useState(navverMinDimension)

  const changeMenuWidth = () => {
    if (smoothOpen === '100%'){
      setSmoothOpen(navverMinDimension)
    }
    setSmoothOpen('100%')
  }

  return (
    <>
    <Box w="100%" bg='white'>
    <Flex
        bg={headerBg}
        backdropFilter='blur(100px)'
        position='fixed'
        top='0'
        minHeight={navverMinDimension}
      >
          <Box
            w={smoothOpen}
            transition="width .5s"
            shadow='md'
            onClick={onToggle}
            // onClick={changeMenuWidth}
            onHover={changeMenuWidth}

            >
            <ProgressHamburger />
          </Box>
          {!isOpen ?
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
           </Flex> : null}

      </Flex>
      </Box>
      </>
  )

}

export default TopBar
