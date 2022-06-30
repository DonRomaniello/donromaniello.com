import { collection,
         getDocs,
        query } from "firebase/firestore";

import { db } from '../../config/firebase';

export const getDocumentsForStore = async (docsToQuery) => {
  let documents = []
  const documentsSnapshot = await getDocs(query(collection(db, docsToQuery)));
  documentsSnapshot.forEach((doc) => {
    documents.push(doc.data())
  })
  return documents
}
