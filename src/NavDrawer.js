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

  const { onToggle, isOpen, posts, setSelectedPost } = props;

  const btnRef = React.useRef()

  return (
    <>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='left'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
        backdropFilter='blur(20px)'
        onMouseLeave={onToggle}
        // bg="rgba(0, 0, 0, 0)"
        shadow='none'
        >
          <DrawerHeader
              w="62%"
              size='md'
              margin='10px'
              >
                <Link to='/'>
                Home
                </Link>
          </DrawerHeader>


          <DrawerBody>
            {posts.length ? posts.map((post, idx) =>  {
              return (<NavLinks key={idx} post={post} id={idx} setSelectedPost={setSelectedPost} />)
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
