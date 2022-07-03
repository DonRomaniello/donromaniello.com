import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  Flex,
  Image,
  Text
} from '@chakra-ui/react'

function Stack(props) {

  const { stack } = props;

  const isMobile = useSelector(selectIsMobile);

  const [techStack, setTechStack] = useState([]);

  const makeUrl = (directory, name) => {
    let url = directory + name
                      .toLowerCase()
                      .split(' ')
                      .join('')
                      .split('.')
                      .join('')
                      .split('-')
                      .join('')
                      + '.svg'

    return url
  }

  useEffect(() => {
    if (stack?.length){
      setTechStack(stack)
    }
  }, [stack])

  return (
    <>
    <Flex>
    {techStack.map((name) =>{
      return (
        <>
        <Image
          src={makeUrl('/logos/', name)}
          margin='1vw'
          h='50px'
          w='50px'
          key={name}
          />
        {/* <Text>
        {name}
        </Text> */}
        </>
      )
    })}
    </Flex>
    </>
  )
}

export default Stack
