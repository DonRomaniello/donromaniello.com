import React, {useState, useEffect} from 'react';

import {
  Box,
  Center,
  Flex,
  // Link,
  Progress,
} from '@chakra-ui/react';

import { Link } from "react-router-dom";

import useScrollPosition from '@react-hook/window-scroll'

function ProgressHamburger(props) {

  const {isOpen, navverMinDimension} = props;

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollY = useScrollPosition(0)

  useEffect(() => {

    const scrollMinusOffset = -(document.documentElement.clientHeight
                            - document.documentElement.offsetHeight)

    const scrollAmount = Math.floor(100 * (scrollY / scrollMinusOffset) )

    setScrollPercentage(scrollAmount)

  }, [scrollY])

  const linkList = ['Bio', 'Blog', 'Projects']


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
                transition='transform .4s'
                transform={isOpen ? 'rotate(-90deg)' : null}
                key={'biggestBox' + link}
                h='14%'
                >
                  <Progress
                    key={'progress' + link}
                    size='sm'
                    w='4.96vw'
                    colorScheme={(scrollPercentage < 99) ? 'blue' : 'green'}
                    value={(scrollPercentage < (33 * idx)) ? 0 : ((scrollPercentage * 3) - (idx * 100))}
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
                    >
                      <Link
                      to={`/${link.toLowerCase()}`}
                      key={'link' + link}
                       >
                        {link}
                      </Link>
                    </Center>
                    : null}
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
