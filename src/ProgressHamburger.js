import React, {useState, useEffect} from 'react';

import {
  Stack,
  Progress
} from '@chakra-ui/react';

import useScrollPosition from '@react-hook/window-scroll'

function ProgressHamburger(props) {

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
      <Stack spacing={5} padding="19%">
        {progressDividers.map((d, idx) => {
          return (
            <Progress
              key={idx}
              size='xs'
              colorScheme={(scrollPercentage < 99) ? 'blue' : 'green'}
              value={(scrollPercentage < (33 * d)) ? 0 : ((scrollPercentage * 3) - (d * 100))}
            />
          )
        })
        }
        </Stack>
      </>
  )

}


export default ProgressHamburger

