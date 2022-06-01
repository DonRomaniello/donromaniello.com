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


function NavDrawer(props) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

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
        onMouseLeave={onToggle}
        bg="rgba(0, 0, 0, 0)"
        >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavDrawer;
