import React, {useState, useEffect} from 'react';

import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Heading,
} from '@chakra-ui/react';

import useScrollPosition from '@react-hook/window-scroll'


function TopBar(props) {

  const { divGap, navverMinDimension }  = props;

  const [scrollPercentage, setScrollPercentage] = useState(0);


  const scrollY = useScrollPosition(60)

  useEffect(() => {

    const scrollMinusOffset = -(document.documentElement.clientHeight
                            - document.documentElement.offsetHeight)

    const scrollAmount = Math.floor(100 * (scrollY / scrollMinusOffset) )

    setScrollPercentage(scrollAmount)

  }, [scrollY])

  return (
    <>
    <Box w="100%" h={divGap} bg='white'>
    <Flex
        bg='rgba(255, 255, 255, 16)'
        backdropFilter='blur(50px)'
        position='fixed'
        top='0'
        minHeight={navverMinDimension}
      >
          <Box
            w={navverMinDimension}
            shadow='md'
            >
              <Center w='100%' h='100%'>
                <CircularProgress
                padding="19%"
                thickness='11px'
                size="100%"
                capIsRound='true'
                trackColor='white'
                color={(scrollPercentage < 100) ? 'blue' : 'green'}
                value={scrollPercentage}
                />
              </Center>
          </Box>
          <Flex
           shadow='md'
           w='100vw'
           alignItems='center'
           >
             <Heading
             marginLeft='1vw'
             maxH='62%'
             >
               Don Romaniello's .com
             </Heading>
           </Flex>

      </Flex>
      </Box>
      </>
  )

}

export default TopBar
