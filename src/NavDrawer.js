import React, {useState, useEffect} from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from '@chakra-ui/react'

import { db, storage } from './config/firebase';

import { collection, getDocs } from "firebase/firestore";

import { ColorModeSwitcher } from './ColorModeSwitcher';

import NavLinks from './NavLinks';



function NavDrawer(props) {
  // const { isOpen, onOpen, onClose } = useDisclosure()


  const [posts, setPosts] = useState([]);





  const getBlogPosts = async () => {

    const blogPosts = await getDocs(collection(db, "blog"));

    blogPosts.forEach((post) => {

      console.log(post.data())

    })

  }

  useEffect(() => {

    getBlogPosts();

  }, [])










  const { onToggle, isOpen, contentLinks } = props;

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
        onMouseLeave={onToggle}
        bg="rgba(0, 0, 0, 0)"
        shadow='none'
        >
          <DrawerHeader >
            <Button
              w="62%"
              size='md'
              margin='10px'
              >Home
            </Button>
          </DrawerHeader>

          <DrawerBody>
            {contentLinks.map((content, idx) =>  {
              return (<NavLinks key={idx} content={content} id={idx} />)
            })}
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
