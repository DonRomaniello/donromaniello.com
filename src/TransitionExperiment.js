import React from 'react';

import {useState} from 'react'

import { Text
       } from '@chakra-ui/react';

function TransitionExperiement () {

  const [awayTheyGo, setAwayTheyGo] = useState(false)

  return (
    <>
    <Text
    position='fixed'
    bottom={awayTheyGo ? '90%' : '0%'}
    left='10%'
    transition='bottom 10s ease-in'
    onClick={() => setAwayTheyGo(!awayTheyGo)}
    >Ease In</Text>
    <Text
    position='fixed'
    bottom={awayTheyGo ? '90%' : '0%'}
    left='50%'
    transition='bottom 10s ease-out'
    >Ease Out</Text>
    <Text
    position='fixed'
    bottom={awayTheyGo ? '90%' : '0%'}
    left='90%'
    transition='bottom 10s ease-in-out'
    >Ease In Out</Text>
    </>
  );
};

export default TransitionExperiement;
