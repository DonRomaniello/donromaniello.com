import { getBlob, getStorage, ref, listAll } from "firebase/storage";

const getImages = async (directory, setFunction) => {

    let useUrl;

    let thumbnailBlobs = {};

    listAll(ref(getStorage(), `${directory}`))
    .then((res) => {
      res.items.forEach((itemRef) => {
        getBlob(itemRef)
        .then((blob) => {
          useUrl = URL.createObjectURL(blob);
        }).finally(() => {
          thumbnailBlobs[itemRef.name] = useUrl
        })
      })


    })
    .finally(() => {
      setFunction(thumbnailBlobs)})

}

export default getImages


