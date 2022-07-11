import { getBlob,
         getStorage,
         ref,
         } from "firebase/storage";

export const getFileForStore = async (filepath) => {

    const fileRef = ref(getStorage(), filepath)

    const fileBlob = await getBlob(fileRef)
    .then((blob) => {

      const blobURL = URL.createObjectURL(blob)

      return blobURL
    })

    return fileBlob
  }



