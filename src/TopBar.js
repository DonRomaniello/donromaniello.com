import React, {useState, useEffect} from 'react';
import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Heading,
} from '@chakra-ui/react';

function TopBar(props) {

  const { divGap, navverMinDimension }  = props;

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    console.log("Scroll:", scrollPosition)

  }, [scrollPosition])



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
                value={80}
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
