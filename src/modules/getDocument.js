import { collection, onSnapshot } from "firebase/firestore";

import { db } from '../config/firebase';


const getDocument = async (collectionName, setFunction) => {
  const unsub = onSnapshot(collection(db, collectionName), (doc) => {
    setFunction(doc.docs.map((doc) => doc.data()))
});
  return unsub
}

export default getDocument;
