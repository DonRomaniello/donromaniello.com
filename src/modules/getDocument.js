import { collection, onSnapshot } from "firebase/firestore";

import { db } from '../config/firebase';


const getDocument = async (collectionName, setFunction) => {

  const docCollection = collection(db, collectionName)

  const unsub = onSnapshot(docCollection, (doc) => {
    setFunction(doc.docs.map((doc) => doc.data()))
});
  return unsub
}

export default getDocument;
