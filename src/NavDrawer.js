import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";

import {
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Text
} from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher';

import NavLinks from './NavLinks';



function NavDrawer(props) {

  const { onToggle, isOpen, posts } = props;

  const btnRef = React.useRef()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
        backdropFilter='blur(20px)'
        onMouseLeave={onToggle}
        shadow='none'
        >
          <DrawerHeader
              w="62%"
              size='md'
              // margin='10px'
              >
                <Link to='/'>
                Home
                </Link>
          </DrawerHeader>
          <DrawerBody>
            {posts.length ? posts.map((post, idx) =>  {
              return (<NavLinks key={idx} post={post} id={idx} />)
            }) : ''}
          </DrawerBody>

          <DrawerFooter >
            <ColorModeSwitcher justifySelf="flex-start" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavDrawer;
