import { collection,
         getDocs,
        query } from "firebase/firestore";

import { db } from '../../config/firebase';

export const getAllDocumentsForStore = async (docsToQuery) => {
  let documents = []

  const docCollection = collection(db, docsToQuery)

  const docQuery = query(docCollection);

  const documentsSnapshot = await getDocs(docQuery);
  documentsSnapshot.forEach((doc) => {
    documents.push(doc.data())
  })
  return documents
}
