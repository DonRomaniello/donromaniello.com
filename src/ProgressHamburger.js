import React, {useState, useEffect} from 'react';

import {
  Box,
  Center,
  Flex,
  Link,
  Progress,
} from '@chakra-ui/react';

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

  const progressDividers = [0, 1, 2]


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
            <Link>
              Link
            </Link>
          </Center>
          : null}
        </Box>
        {progressDividers.map((d, idx) => {
            return (
              <>
                <Box
                transition='transform .4s'
                transform={isOpen ? 'rotate(-90deg)' : null}
                key={'box' + idx}
                h='14%'
                >
                  <Progress
                    key={idx}
                    size='sm'
                    w='4.96vw'
                    colorScheme={(scrollPercentage < 99) ? 'blue' : 'green'}
                    value={(scrollPercentage < (33 * d)) ? 0 : ((scrollPercentage * 3) - (d * 100))}
                  />
                </Box>
                <Box
                h='14%'
                w='33%'
                >
                  {isOpen ?
                    <Center
                    h='100%'
                    >
                      <Link>
                        Link
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
