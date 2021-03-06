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
  Center,
  Image,
  Link,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import { makeUrlFriendly } from './modules/makeUrlFriendly';

function Stack(props) {

  const { stack } = props;

  const dispatch = useDispatch();

  const stackData = useSelector(selectStackData)

  const isMobile = useSelector(selectIsMobile);

  const [techStack, setTechStack] = useState([]);

  const logoWidth = isMobile ? 40 : 50


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
    justify='center'
    maxW={isMobile ? ((logoWidth * 5) + 'px') : ((logoWidth * 9) + 'px')}
    >
    {techStack.map((name) =>{
      return (
        <>
        <WrapItem
        key={name}>
          <Link
          href={stackData[name]}
          isExternal
          key={name}>
            <Center>
              <Image
                src={'/logos/' + makeUrlFriendly(name) + '.svg'}
                fallbackSrc='/logo.svg'
                a_href={stackData[name]}
                margin='1vh'
                transition='max-height .2s'
                maxH={logoWidth + 'px'}
                objectFit='scale-down'
                key={name}
                />
              </Center>
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
