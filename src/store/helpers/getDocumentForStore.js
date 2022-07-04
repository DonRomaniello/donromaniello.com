import { collection,
         getDocs,
         query,
         where } from "firebase/firestore";

import { db } from '../../config/firebase';

export const getDocumentForStore = async (docsToQuery,
                                          matchField,
                                          matchStatement) => {
  let documents = []

  const documentsSnapshot = await getDocs(
    query(
      collection(db, docsToQuery),
       where(matchField, "==", matchStatement)));
       console.log('The prib')
  documentsSnapshot.forEach((doc) => {
    documents.push(doc.data())
  })

  return documents
}
