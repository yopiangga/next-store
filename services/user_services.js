import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";

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

export async function getUser(uid) {
  const db = getFirestore();

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // console.log("No such document!");
    return null;
  }
}
