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


export async function uploadStateChange(gridState){
    return new Promise(function(resolve,reject) {
        setDoc(doc(firestore, "websites/materials takeoff/states", "main"),  { createdAt: serverTimestamp(), gridState: JSON.stringify(gridState)}).then(resolve("state updated"))
    })
}

export async function uploadNewCellState(newCellState, oldCellState){
    return new Promise(async function(resolve, reject) {
        for(let key in newCellState){
            if (newCellState[key] !== oldCellState[key]) {
                console.log(key)
                const docRef = doc(firestore, "future units/36 Castro St/materials/"+newCellState.id);
                let update = { }
                update[key] = newCellState[key]
                console.log(update)
                await updateDoc(docRef, update).then((x) => resolve(newCellState))
            }
        }
        resolve(oldCellState)

    })
}

export async function uploadColumnVisibility(gridState){ return new Promise(function(resolve,reject) {
    setDoc(doc(firestore, "websites/materials takeoff/states", "ColumnVisibilityModel"),  { createdAt: serverTimestamp(), gridState: JSON.stringify(gridState)}).then(resolve("state updated"))
})
}



export async function getInitialState(docID){
    return new Promise(function(resolve, reject){
        getDoc(doc(firestore, "websites/materials takeoff/states", docID)).then(x => resolve((JSON.parse(x.data().gridState))))
    })
}



export async function uploadGridStateObj(gridState, docName) {
    return new Promise(function(resolve, reject) {
        setDoc(doc(firestore, "websites/materials takeoff/states",docName), {createdAt: serverTimestamp(), gridState: JSON.stringify(gridState)})
    })
}

