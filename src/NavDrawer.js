import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure
} from '@chakra-ui/react'

import NavLinks from './NavLinks';


function NavDrawer(props) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

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
          <DrawerHeader>
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

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavDrawer;
