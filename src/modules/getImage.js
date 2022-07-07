import { getBlob, getStorage, ref } from "firebase/storage";

const getImage = async (name, directory, setFunction) => {

    let fileName = name.toLowerCase().split(' ').join('_')

    let useUrl;

    const blobRef = ref(getStorage(), `${directory}/${fileName}.webp`)

    getBlob(blobRef)
    .then((blob) => {
      useUrl = URL.createObjectURL(blob);
      }).finally(() => {
        setFunction(useUrl)
      })
  }

export default getImage
