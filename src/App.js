import React, {useState, useEffect} from 'react';

import {
  ChakraProvider,
  useMediaQuery
} from '@chakra-ui/react';

import { db, storage } from './config/firebase';

import { collection, onSnapshot } from "firebase/firestore";

import { getBlob, getStorage, ref, listAll } from "firebase/storage";

import theme from './config/theme'

import TopBar from './TopBar'

import BottomParts  from './BottomParts'

function App() {

  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const navverMinDimension = '100px'

  const [posts, setPosts] = useState([]);

  const getBlogPosts = async () => {
    const unsub = onSnapshot(collection(db, "blog"), (doc) => {
      setPosts(doc.docs.map((doc) => doc.data()))
  });
    return unsub
  }

  const getBlogThumbnails = async () => {

    const itemArray = []

    listAll(ref(getStorage(), '/blog/images/small'))
      .then((res) => {
        res.items.forEach((item) => {

          // console.log("These are the thumbnails:", item)

          const itemRef = ref(storage, item)

          itemArray.push(itemRef)

        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });

      console.log(itemArray)

    // getDownloadURL(ref(getStorage(), '/blog/images/small');)
  }


  useEffect(() => {
    getBlogPosts();
  }, [])

  useEffect(() => {
    getBlogThumbnails();
  }, [posts])




  return (
    <ChakraProvider theme={theme}>
        <TopBar
        navverMinDimension={navverMinDimension} posts={posts} isMobile={isMobile}
        />
        <BottomParts
        navverMinDimension={navverMinDimension} posts={posts} isMobile={isMobile}
         />
    </ChakraProvider>
  );
}

export default App;
