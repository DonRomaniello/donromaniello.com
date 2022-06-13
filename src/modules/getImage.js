import { getBlob, getStorage, ref, listAll } from "firebase/storage";

const getImage = async (name, directory, setFunction) => {

    let fileName = name.toLowerCase().split(' ').join('_')

    let useUrl;

    getBlob(ref(getStorage(), `${directory}/${fileName}.webp`))
    .then((blob) => {
      useUrl = URL.createObjectURL(blob);
      }).finally(() => {
        setFunction(useUrl)
      })
  }

export default getImage
