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
  Progress,
  Skeleton
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

  const scrolledPastHeight = (isMobile ? (document.documentElement.clientWidth * .1) : 75)

  let barHeight = isMobile ? '1vw' : '10px'

  let barWidth = isMobile ? '6.5vw' : '46px'

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollY = useScrollPosition(0)

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

  }, [scrollY])

  const scrollBar = (idx) => {
    if (scrollPercentage < (33 * idx)) {
      return 0;
    } else {
      return ((scrollPercentage * 3) - (idx * 100))
    }
  }

  const linkList = [
    <Link
    to='bio'
    > Bio</Link>,
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
    > Projects</Link>,]

  return (
    <>
    <Flex
    padding={isMobile ? '2vw' : '7px'}
    h='100%'
    direction={isOpen ? 'row' : 'column'}
    align='center'
    transition='filter .2s'
    _hover={isOpen ? null : {filter:'invert(33%)'}}


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
                    colorScheme={(scrollPercentage < 99) ? 'darkBlue' : 'lightBlue'}
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
