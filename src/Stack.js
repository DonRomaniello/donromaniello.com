import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsMobile,
} from './store/features/isMobile'

import {
  fetchStackData,
  selectStackData,
} from './store/features/stackData'

import {
  Box,
  Image,
  Link,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

function Stack(props) {

  const { stack } = props;

  const dispatch = useDispatch();

  const stackData = useSelector(selectStackData)

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

  useEffect(()=> {
    dispatch(fetchStackData());
  }, [stack])

  useEffect(() => {
    if (stack?.length){
      setTechStack(stack)
    }
  }, [stack])

  return (
    <>
    <Wrap
    justify='center'>
    {techStack.map((name) =>{
      return (
        <>
        <WrapItem
        key={name}>
            <Link
            href={stackData[name]}
            isExternal
            key={name}>
            <Image
              src={makeUrl('/logos/', name)}
              fallbackSrc='/logo.svg'
              a_href={stackData[name]}
              margin='1vw'
              maxH='50px'
              objectFit='scale-down'
              key={name}
              />
              </Link>
          </WrapItem>
        </>
      )
    })}
    </Wrap>
    </>
  )
}

export default Stack
