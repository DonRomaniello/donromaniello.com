import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
 trueJerk,
 falseJerk,
 toggleJerk,
 selectJerk
} from './store/features/isJerk'

import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';


function TopBar(props) {

  const jerk = useSelector(selectJerk);

  const dispatch = useDispatch();

  const { isMobile,
          navverMinDimension,
          posts,
          preCachedThumbnails,
          setPreCachedHeadshot,
          setPreCachedThumbnails }  = props;

  const { isOpen, onToggle } = useDisclosure();

  const headerBg = useColorModeValue('rgba(255, 255, 255, .9)',
                                     'rgba(26, 32, 44, .9)')

    console.log("Jerk?", jerk)

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
              isMobile={isMobile}
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
             fontSize={isMobile ? '1em' : '2em'}
             onClick={() => dispatch(toggleJerk())}
             >
               {jerk.isJerk ? 'The Website of Don Romaniello' : "critical error: you broke it"}
             </Heading>
           </Flex>
      </Flex>
      </>
  )

}

export default TopBar
