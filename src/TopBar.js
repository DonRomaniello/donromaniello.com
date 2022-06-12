import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';

function TopBar(props) {

  const { navverMinDimension, posts, setPreCachedThumbnail }  = props;

  const { isOpen, onToggle } = useDisclosure();

  const headerBg = useColorModeValue('rgba(255, 255, 255, .9)',
                                     'rgba(26, 32, 44, .9)')


  return (
    <>
    <Flex
        bg={headerBg}
        backdropFilter='blur(100px)'
        position='fixed'
        top='0'
        h={navverMinDimension}
        minWidth='max-content'
        direction='columns'
      >
          <Box
            w={isOpen ? '100vw' : navverMinDimension}
            transition="width .2s"
            shadow='md'
            onClick={onToggle}
            align='flex-start'
            >
            <ProgressHamburger
              isOpen={isOpen}
              navverMinDimension={navverMinDimension}
              posts={posts}
              setPreCachedThumbnail={setPreCachedThumbnail}
            />
          </Box>
          {isOpen ?
              null :
              <Flex
              shadow='md'
              w='100vw'
              alignItems='center'
              >
             <Heading
             paddingLeft='1vw'
             maxH='62%'
             >
               The Website of Don Romaniello
             </Heading>
           </Flex>}
      </Flex>
      </>
  )

}

export default TopBar
