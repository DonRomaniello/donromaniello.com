import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
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
    {techStack.map((name) =>{
      return (
        <>
        <Image
          src={makeUrl('/logos/', name)}
          h='50px'
          />
        <Text>
        {name}
        </Text>
        </>
      )
    })}
    </>
  )
}

export default Stack
