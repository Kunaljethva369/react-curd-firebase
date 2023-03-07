import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyDZeVNhquYS102XIZ1X0LDZ7xWwXDwCii8",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "curd-react-firebase.firebaseapp.com",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "curd-react-firebase",
    // projectId: process.env.REACT_APP_PROJECT,
    // storageBucket: "curd-react-firebase.appspot.com",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: "414393612926",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: "1:414393612926:web:21cae54864cb342e3f362f",
    appId: process.env.REACT_APP_APP_ID,
    // measurementId: "G-VK4C9CVS94",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;