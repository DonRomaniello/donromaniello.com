import React, {useState, useEffect} from 'react';


import {
  Box,
  Center,
  Flex,
  Progress,
} from '@chakra-ui/react';

import { Link } from "react-router-dom";

import BlogPopover from './BlogPopover';

import useScrollPosition from '@react-hook/window-scroll'

function ProgressHamburger(props) {

  const { isOpen,
          posts,
          setPreCachedThumbnails } = props;

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollY = useScrollPosition(0)

  useEffect(() => {

    const scrollMinusOffset = -(document.documentElement.clientHeight
                            - document.documentElement.offsetHeight)

    const scrollAmount = Math.floor(100 * (scrollY / scrollMinusOffset) )

    setScrollPercentage(scrollAmount)

  }, [scrollY])

  const scrollBar = (idx) => {
    if (scrollPercentage < (33 * idx)) {
      return 0;
    } else {
      return ((scrollPercentage * 3) - (idx * 100))
    }
  }

  const linkList = ['Bio',
   <BlogPopover
   posts={posts}
   setPreCachedThumbnails={setPreCachedThumbnails}
   />,
    'Projects']

  return (
    <>
    <Flex
    padding='1.52vw'
    h='100%'
    direction={isOpen ? 'row' : 'column'}
    align='center'
    >
        <Box
        h='14%'
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
                h='14%'
                >
                  <Progress
                    key={'progress' + link}
                    height='100%'
                    w='4.96vw'
                    colorScheme={(scrollPercentage < 99) ? 'darkBlue' : 'lightBlue'}
                    value={scrollBar(idx)}
                  />
                </Box>
                <Box
                h='14%'
                w='33%'
                key={'linkBox' + link}
                >
                  {isOpen ?
                    <Center
                    h='100%'
                    key={'center' + link}
                    >{link}
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
