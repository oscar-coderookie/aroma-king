import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";
const collection_name = "BIG-PUFFS-AROMA-KING";

 export const findByAlphabeticalOrder = async () => {
    const collection_ref = collection(db(), collection_name);
    const q = query(collection_ref, orderBy("name"));
    const doc_refs = await getDocs(q);

    const res = [];

    doc_refs.forEach((country) => {
      res.push({
        id: country.id,
        ...country.data(),
      });
    });

    return res;
  };