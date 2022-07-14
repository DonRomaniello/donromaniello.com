import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  setScrolledPastHeader,
} from './store/features/scrolledPastHeader'

import {
  Box,
  Center,
  Flex,
  LightMode,
  Progress,
  Skeleton,
  useColorMode,
} from '@chakra-ui/react';

import { Link } from "react-router-dom";

import useScrollPosition from '@react-hook/window-scroll'

const BlogPopover = React.lazy(() => import('./BlogPopover'))

function ProgressHamburger(props) {

  const { isOpen,
          posts,
          setPreCachedThumbnails } = props;

  const dispatch = useDispatch();

  const isMobile = useSelector(selectIsMobile);

  const {colorMode} = useColorMode();

  const scrolledPastHeight = (isMobile ? (document.documentElement.clientWidth * .1) : 75)

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollY = useScrollPosition(0)

  const [fullyScrolled, setFullyScrolled] = useState(false)

  const [burgerHover, setBurgerHover] = useState(false)

  let barHeight = isMobile ? '1vw' : '10px'

  let barWidth = isMobile ? '6.5vw' : '46px'

  const scrollBar = (idx) => {
    if (scrollPercentage < (33 * idx)) {
      return 0;
    } else {
      return ((scrollPercentage * 3) - (idx * 100))
    }
  }

  const progressColor = () => {
    if (colorMode === 'dark') {
      if (fullyScrolled) {
        return 'dark.progress.full'
      }
      return 'dark.progress.filling'
    } else if (colorMode === 'light') {
        if (fullyScrolled) {
          return 'light.progress.full'
        }
        return 'light.progress.filling'
      }
  }

  const borderColor = () => {
    if (colorMode === 'dark'){
      if (burgerHover) {
        return 'black'
      }
      return 'white'
    } else if (colorMode === 'light')
      if (burgerHover) {
        return 'white'
      }
      return 'black'
  }

  useEffect(() => {


    const scrollMinusOffset = -(document.documentElement.clientHeight
                            - document.documentElement.offsetHeight)

    const scrollAmount = Math.floor(100 * (scrollY / scrollMinusOffset) )

    setScrollPercentage(scrollAmount)

    if (scrollY > scrolledPastHeight) {
      dispatch(setScrolledPastHeader(true))
    } else if (scrollY < scrolledPastHeight) {
      dispatch(setScrolledPastHeader(false))
    }

    if (scrollPercentage > 99) {
      setFullyScrolled(true)
    } else if (scrollPercentage <= 99){
      setFullyScrolled(false)
    }


  }, [dispatch,
      scrollY,
      scrolledPastHeight,
      scrollPercentage,
    ])

  const linkList = [
    <Link
    to='bio'
    >
    Bio
    </Link>,
    <React.Suspense fallback={<Skeleton />}>
      <div>
        <BlogPopover
        posts={posts}
        setPreCachedThumbnails={setPreCachedThumbnails}
        />
      </div>
    </React.Suspense>,
    <Link
    to='projects'
    >
    Projects
    </Link>,]

  return (
    <>
    <Flex
    padding={isMobile ? '2vh' : '7px'}
    h='100%'
    direction={isOpen ? 'row' : 'column'}
    align='center'
    transition='filter .2s'
    onMouseEnter={() => setBurgerHover(true)}
    onMouseLeave={() => setBurgerHover(false)}

    >
        <Box
        h={barHeight}
        w='33%'
        align='center'
        >
          {isOpen ?
          <Center
          h='100%'
          >
            <Link to='/'>
              Home
            </Link>
          </Center>
          : null}
        </Box>
        {linkList.map((link, idx) => {
            return (
              <>
                <Box
                transition='transform .6s'
                transform={isOpen ? 'rotate(-90deg)' : null}
                key={'biggestBox' + link}
                h={barHeight}
                >
                  <Progress
                    aria-label={`${idx} progress`}
                    key={'progress' + link}
                    height={barHeight}
                    w={barWidth}
                    colorScheme={progressColor()}
                    transition='border-color .2s'
                    border='1px'
                    bg={colorMode === 'dark' ? 'dark.bg' : 'light.bg'}
                    borderColor={borderColor()}
                    value={scrollBar(idx)}
                  />
                </Box>
                <Box
                h={barHeight}
                w='33%'
                key={'linkBox' + link}
                >
                  {isOpen ?
                    <Center
                    h='100%'
                    key={'center' + link}
                    >
                      {link}
                    </Center>
                    : <Box
                    key={'centerBox' + link}
                    h='14%'/>}
                </ Box>
              </>
            )
          })
        }
      </Flex>
      </>
  )
}


export default ProgressHamburger
