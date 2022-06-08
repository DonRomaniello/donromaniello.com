import React, {useState, useEffect} from 'react';

import {
  Grid,
  GridItem,
  Progress,
  Spacer
} from '@chakra-ui/react';

import useScrollPosition from '@react-hook/window-scroll'

function ProgressHamburger() {

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
      templateRows='repeat(7,1fr)'
      padding="19%">
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

