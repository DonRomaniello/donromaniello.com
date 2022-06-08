import React, {useState, useEffect} from 'react';

import {
  Center,
  Flex,
  Grid,
  GridItem,
  Progress,
  Spacer,
  Text
} from '@chakra-ui/react';

import useScrollPosition from '@react-hook/window-scroll'

function ProgressHamburger(props) {

  const {isOpen} = props;

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollY = useScrollPosition(60)

  useEffect(() => {

    const scrollMinusOffset = -(document.documentElement.clientHeight
                            - document.documentElement.offsetHeight)

    const scrollAmount = Math.floor(100 * (scrollY / scrollMinusOffset) )

    setScrollPercentage(scrollAmount)

  }, [scrollY])

  const progressDividers = [0, 1, 2]



  return (
    <>
    <Grid
      transform={isOpen ? 'rotate(90deg)' : ''}
      padding='1.52vw'
      align='center'
      templateRows='repeat(7,1fr)'
      >
        <GridItem>
          <Spacer />
        </GridItem>
        {progressDividers.map((d, idx) => {
            return (
              <>
                <GridItem>
                  <Progress
                    key={idx}
                    size='sm'
                    w='4.96vw'
                    colorScheme={(scrollPercentage < 99) ? 'blue' : 'green'}
                    value={(scrollPercentage < (33 * d)) ? 0 : ((scrollPercentage * 3) - (d * 100))}
                  />
                </GridItem>
                <GridItem>
                  <Spacer />
                </GridItem>
              </>
            )
          })
        }
        <GridItem>
          <Spacer />
        </GridItem>
      </Grid>
      </>
  )
}


export default ProgressHamburger

