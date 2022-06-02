import React, {useState, useEffect} from 'react';

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

import { db } from './config/firebase';

import { collection, onSnapshot } from "firebase/firestore";

import { ColorModeSwitcher } from './ColorModeSwitcher';

import NavLinks from './NavLinks';



function NavDrawer(props) {

  const [posts, setPosts] = useState([]);

  const [titles, setTitles] = useState([]);

  const getBlogPosts = async () => {

    const unsub = onSnapshot(collection(db, "blog"), (doc) => {
      setPosts(doc.docs.map((doc) => doc.data()))
  });

    return unsub

  }

  useEffect(() => {
    getBlogPosts();
  }, [])

  useEffect(() => {
    if (posts.length) {
      setTitles(posts.map((post) => post.title))
    }

    console.log(posts)

  }, [posts])

  const { onToggle, isOpen } = props;

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
              >Home
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
