import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./Config";

const db = getFirestore(app);

export const getProducts = async (setProducts) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = []

  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  setProducts(products)
};

export const getSingleProducts = async (id, setItem) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setItem(docSnap.data())
  } else {
    console.log("No such document!");
  }
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
