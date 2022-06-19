import React from 'react';

import { Link } from "react-router-dom";


import {
  Text,
} from '@chakra-ui/react';

function NavLinks (props) {

  const { directory,
          post } = props;

  const resetScroll = () => {
    window.scrollTo(0,0)
  }

  return (
    <>
    <div>
    <Link to={`/${directory}/${post.title}`} >
      <Text
        fontSize='lg'
        margin='9.5'
        onClick={resetScroll}
      >{post.title}
      </Text>
      </Link>
      </div>
    </>
  )
}

export default NavLinks;
