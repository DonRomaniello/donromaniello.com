import React, {
      useEffect,
} from 'react';

import {
  useDispatch,
  useSelector } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  selectNavMinDimension,
  setNavMinDimension,
 } from './store/features/navMinDimension';

import {
  selectTitleAddendum,
} from './store/features/titleAddendum'

import { selectScrolledPastHeader,
 } from './store/features/scrolledPastHeader';

import {
  Box,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';

import ProgressHamburger from './ProgressHamburger';

function TopBar(props) {

  const { posts,
          preCachedThumbnails,
          setPreCachedHeadshot,
          setPreCachedThumbnails }  = props;

  const dispatch = useDispatch();

  const titleAddendum = useSelector(selectTitleAddendum);

  const scrolledPastHeader = useSelector(selectScrolledPastHeader);

  const isMobile = useSelector(selectIsMobile);

  const navverMinDimension = useSelector(selectNavMinDimension)

  const { isOpen, onToggle } = useDisclosure();

  const {colorMode} = useColorMode();

  useEffect(() => {

    dispatch(setNavMinDimension((isMobile ? '10vw' : '75px')))


  }, [])

  return (
    <>
    <Flex
        bg={colorMode === 'dark' ? 'dark.bg' : 'light.bg'}
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
      <Spacer />
          <Heading
          variant={isOpen ? 'topBarMajor' : 'topBarMajorShown'}
          opacity={scrolledPastHeader ? '100' : '0'}
          filter={scrolledPastHeader ? 'blur(0px)' : 'blur(100px)'}
          fontSize={isMobile ? '1em' : '2em'}
          >{titleAddendum}
          </Heading>
          <Heading
          variant={isOpen ? 'topBarMajor' : 'topBarMajorShown'}
          opacity={scrolledPastHeader ? '0' : '100'}
          filter={scrolledPastHeader ? 'blur(100px)' : 'blur(0px)'}
          fontSize={isMobile ? '1em' : '2em'}
        >The Website of Don Romaniello
          </Heading>
      <Spacer />
        </Flex>
      </Flex>
      </>
  )
}

export default TopBar
