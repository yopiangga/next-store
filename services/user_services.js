import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";

export async function addUser(uid, name, email) {
  const db = getFirestore();
  return await setDoc(doc(db, "users", uid), {
    uid: uid ?? "",
    name: name ?? "",
    email: email ?? "",
    address: "",
    phone: "",
    cart: [],
    role: 2,
  });
}
