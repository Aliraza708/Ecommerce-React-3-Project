
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBjOuL3B3nRaCO9Fo2IvJrkXq3AOdqjg9g",
  authDomain: "my-first-project-8596d.firebaseapp.com",
  projectId: "my-first-project-8596d",
  storageBucket: "my-first-project-8596d.appspot.com",
  messagingSenderId: "549023476953",
  appId: "1:549023476953:web:d356f595e611585e0f62c8",
  measurementId: "G-3LX0PV9JT7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const storage = getStorage(app)
const db = getFirestore(app);

export{
    auth,storage, db
}
