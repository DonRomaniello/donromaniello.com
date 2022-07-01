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
            shadow='md'
            onClick={onToggle}
            // align='flex-start'
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
              shadow='md'
              w='100vw'
              align='center'
              >
             <Heading
             paddingLeft='1vw'
             maxH='62%'
             transition="font-size .2s, opacity .2s, filter .05s"
             opacity={scrolledPastHeader ? '100' : '0'}
             filter={scrolledPastHeader ? 'blur(0px)' : 'blur(100px)'}
             fontSize={isMobile ? '1em' : '2em'}
             position='absolute'
             >{titleAddendum}
             </Heading>
             <Heading
             paddingLeft='1vw'
             maxH='62%'
             transition="font-size .2s, opacity .2s, filter .05s"
             opacity={scrolledPastHeader ? '0' : '100'}
             filter={scrolledPastHeader ? 'blur(100px)' : 'blur(0px)'}
             fontSize={isMobile ? '1em' : '2em'}
            //  position='absolute'
             alignItems='center'
            >The Website of Don Romaniello
             </Heading>
           </Flex>
      </Flex>
      </>
  )

}

export default TopBar
