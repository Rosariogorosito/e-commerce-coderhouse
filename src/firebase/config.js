import { initializeApp } from "firebase/app";

const firebaseConfig = {   
  apiKey: "AIzaSyDApybm9aja4Q0LDZI0JhcOdkMDdia851k",
  authDomain: "derive-proyecto-react-coder.firebaseapp.com",
  projectId: "derive-proyecto-react-coder",
  storageBucket: "derive-proyecto-react-coder.appspot.com",
  messagingSenderId: "922649150006",
  appId: "1:922649150006:web:e1ce9aac4fb58340750e97"
};

export const app = initializeApp(firebaseConfig)