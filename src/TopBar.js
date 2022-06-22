import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectTitleAddendum,
  setTitleAddendum,
} from './store/features/titleAddendum'

import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';


function TopBar(props) {

  const titleAddendum = useSelector(selectTitleAddendum);

  const dispatch = useDispatch();

  const {

          navverMinDimension,
          posts,
          preCachedThumbnails,
          setPreCachedHeadshot,
          setPreCachedThumbnails }  = props;

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
            align='flex-start'
            >
            <ProgressHamburger
              // isMobile={isMobile}
              isOpen={isOpen}
              navverMinDimension={navverMinDimension}
              posts={posts}
              preCachedThumbnails={preCachedThumbnails}
              setPreCachedThumbnails={setPreCachedThumbnails}
              setPreCachedHeadshot={setPreCachedHeadshot}
            />
          </Box>
            <Flex
              shadow='md'
              w='100vw'
              alignItems='center'
              >
             <Heading
             paddingLeft='1vw'
             maxH='62%'
             transition="font-size .2s"
            //  fontSize={isMobile ? '1em' : '2em'}
             onClick={() => dispatch(setTitleAddendum('see?'))}
             >
              <span>The Website of Don Romaniello</span>
              <span>{titleAddendum}</span>
             </Heading>
           </Flex>
      </Flex>
      </>
  )

}

export default TopBar
