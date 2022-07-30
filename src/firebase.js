// import {getFirestore} from'firebase/firestore';
// import  {initializeApp} from "firebase/app";
// import  {getAuth} from "firebase/auth";
// const firebaseConfig = {
//     apiKey: "AIzaSyAneVCJK8274LRQpseRvr5h57W5jsxlDAo",
//     authDomain: "linkedin-clone-7befc.firebaseapp.com",
//     projectId: "linkedin-clone-7befc",
//     storageBucket: "linkedin-clone-7befc.appspot.com",
//     messagingSenderId: "941197147702",
//     appId: "1:941197147702:web:7dace8a19fbfb61f1ca297"
//   };
  
//   const firebaseApp =initializeApp(firebaseConfig);
//   const db = getFirestore(firebaseApp);
//   const auth =getAuth(firebaseApp)
// export  {db,auth};

import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyAneVCJK8274LRQpseRvr5h57W5jsxlDAo",
      authDomain: "linkedin-clone-7befc.firebaseapp.com",
      projectId: "linkedin-clone-7befc",
      storageBucket: "linkedin-clone-7befc.appspot.com",
      messagingSenderId: "941197147702",
      appId: "1:941197147702:web:7dace8a19fbfb61f1ca297"
    };
    const firebaseApp=firebase.initializeApp(firebaseConfig)
    const db =firebaseApp.firestore()
    const auth=firebase.auth()

export {db,auth}