import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAvbRU1Q_NH9bRdDccrleg3l_i-JdoqkdA",
  authDomain: "igo-billing.firebaseapp.com",
  projectId: "igo-billing",
  storageBucket: "igo-billing.appspot.com",
  messagingSenderId: "628795628880",
  appId: "1:628795628880:web:688e355b391a70ae8ae055",
  measurementId: "G-B6YPBQ2381"
};


const app = firebase.initializeApp(firebaseConfig);




export const auth = app.auth();
export default app;
