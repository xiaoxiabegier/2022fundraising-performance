import { initializeApp } from "firebase/app";
import {getFirestore, query, where, collection, getDocs , addDoc, serverTimestamp, doc, updateDoc, setDoc, getDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDPGmgTxlAsVkakZrGbs8NTF2r0RcWu_ig",
    authDomain: "luminous-lambda-364207.firebaseapp.com",
    projectId: "luminous-lambda-364207",
    storageBucket: "luminous-lambda-364207.appspot.com",
    messagingSenderId: "518969290682",
    appId: "1:518969290682:web:d7be744cb378ec83d4f783"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()

export async function getMaterialsData(propertyID){
    const q = collection(firestore, "future units/" + propertyID + "/materials");
    const querySnapshot = await getDocs(q);
    let fullMaterialsData = {}
    querySnapshot.forEach((doc) => {
        fullMaterialsData[doc.id] = doc.data()
    });
    return new Promise((resolve, reject) => {
        resolve(fullMaterialsData)
    })
}



