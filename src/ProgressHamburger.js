import React, {useState, useEffect} from 'react';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Progress,
  Spacer,
  Text
} from '@chakra-ui/react';

import useScrollPosition from '@react-hook/window-scroll'

function ProgressHamburger(props) {

  const {isOpen} = props;

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
    transform={isOpen ? 'rotate(-90deg)' : null}
    padding='1.52vw'
    h='100%'
    direction='column'
    align='center'
    >
        <Box
        h='14%' />
        {progressDividers.map((d, idx) => {
            return (
              <>
                <Box
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
                />
              </>
            )
          })
        }
        <Box />
      </Flex>
      </>
  )
}


export default ProgressHamburger

// <Container
//     transform={isOpen ? 'rotate(-90deg)' : null}
//     padding='1.52vw'
//     direction="column"
//     align='flex-start'
//     >
//     <Grid templateRows='repeat(7,1fr)'>
//         <GridItem h='100%'/>
//         {progressDividers.map((d, idx) => {
//             return (
//               <>
//                 <GridItem>
//                   <Progress
//                     key={idx}
//                     size='sm'
//                     w='4.96vw'
//                     colorScheme={(scrollPercentage < 99) ? 'blue' : 'green'}
//                     value={(scrollPercentage < (33 * d)) ? 0 : ((scrollPercentage * 3) - (d * 100))}
//                   />
//                 </GridItem>
//                 <GridItem h='100%'/>
//               </>
//             )
//           })
//         }
//         <GridItem />
//       </Grid>
//       </Container>
