import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";

export async function addUser(uid, name, email) {
  const db = getFirestore();
  return await setDoc(doc(db, "users", uid), {
    uid: uid ?? "",
    name: name ?? "",
    email: email ?? "",
    address: "-",
    phone: "-",
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

export async function getUsers() {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "users"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  return data;
}

export async function deteleUser(uid) {
  const db = getFirestore();

  const docRef = doc(db, "users", uid);
  return await deleteDoc(docRef);
}

export async function countUser() {
  const db = getFirestore();

  const docSnap = await getDocs(collection(db, "users"));

  const data = [];

  docSnap.forEach((doc) => {
    data.push(doc.id);
  });

  return data.length;
}
