import { collection,
         getDocs,
         query,
         where } from "firebase/firestore";

import { db } from '../../config/firebase';

export const getDocumentForStore = async (docsToQuery,
                                          matchField,
                                          matchStatement) => {
  let documents = []

  const docCollection = collection(db, docsToQuery)

  const docQuery = query(docCollection,where(matchField, "==", matchStatement))

  const documentsSnapshot = await getDocs(docQuery)
  documentsSnapshot.forEach((doc) => {
    documents.push(doc.data())
  })

  return documents
}
