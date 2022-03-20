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

export async function addVisitor(time, device, ip) {
  const db = getFirestore();
  return await setDoc(doc(db, "visitors", time), {
    time: time ?? "",
    device: device ?? "",
    ip: ip ?? "",
  });
}

export async function countVisitor() {
  const db = getFirestore();

  const result = await getDocs(collection(db, "visitors"));

  const now = Date.now();
  var allCount = 0;
  var daily = 0;
  result.forEach((doc) => {
    if (parseFloat(doc.data().time) >= now - parseFloat(60 * 60 * 24 * 1000))
      daily = daily + 1;

    allCount = allCount + 1;
  });
  return { all: allCount, daily: daily };
}
