import { getBlob,
         getStorage,
         ref,
         listAll,
         } from "firebase/storage";

import { makeUrlFriendly } from "../../modules/makeUrlFriendly";


const getAllFilesForStore = async (directory) => {

  const directoryRef = ref(getStorage(), directory)

  let useUrl;

  let thumbnailBlobs = {};

  const thumbnailObject = await listAll(directoryRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getBlob(itemRef)
        .then((blob) => {
          useUrl = URL.createObjectURL(blob);
        }).finally(() => {
            thumbnailBlobs[itemRef.name] = useUrl
          })
        })
    }).finally(() => {
      return thumbnailBlobs
    })


    return thumbnailObject

}

export default getAllFilesForStore


