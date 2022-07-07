import React from 'react';

import { useSelector } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  selectTitleAddendum,
} from './store/features/titleAddendum'

import { selectScrolledPastHeader,
 } from './store/features/scrolledPastHeader';

import {
  Box,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';

function TopBar(props) {

  const { posts,
          preCachedThumbnails,
          setPreCachedHeadshot,
          setPreCachedThumbnails }  = props;

  const titleAddendum = useSelector(selectTitleAddendum);

  const scrolledPastHeader = useSelector(selectScrolledPastHeader);

  const isMobile = useSelector(selectIsMobile);

  const navverMinDimension = (isMobile ? '10vw' : '75px')

  const { isOpen, onToggle } = useDisclosure();

  const {colorMode} = useColorMode();

  const headerBg = useColorModeValue('rgba(255, 255, 255, .9)',
                                     'rgba(26, 32, 44, .9)')

  return (
    <>
    <Flex
        bg={headerBg}
        backdropFilter='blur(100px)'
        position='fixed'
        top='0'
        transition='height .2s'
        h={navverMinDimension}
        minWidth='max-content'
        direction='columns'
        zIndex='banner'
      >
          <Box
            w={isOpen ? '100vw' : navverMinDimension}
            transition="width .2s"
            borderBottom='1px'
            borderColor={colorMode === "dark" ? "darkBlue.700" : 'lightBlue.200'}
            onClick={onToggle}
            >
            <ProgressHamburger
              isOpen={isOpen}
              posts={posts}
              preCachedThumbnails={preCachedThumbnails}
              setPreCachedThumbnails={setPreCachedThumbnails}
              setPreCachedHeadshot={setPreCachedHeadshot}
            />
          </Box>
            <Flex
              w='100vw'
              align='center'
              borderBottom='1px'
              borderColor={colorMode === "dark" ? "darkBlue.700" : 'lightBlue.200'}
              >
             <Heading
             variant='topBarMajor'
             opacity={scrolledPastHeader ? '100' : '0'}
             filter={scrolledPastHeader ? 'blur(0px)' : 'blur(100px)'}
             >{titleAddendum}
             </Heading>
             <Heading
             variant='topBarMajor'
             opacity={scrolledPastHeader ? '0' : '100'}
             filter={scrolledPastHeader ? 'blur(100px)' : 'blur(0px)'}
            >The Website of Don Romaniello
             </Heading>
           </Flex>
      </Flex>
      </>
  )

}

export default TopBar
