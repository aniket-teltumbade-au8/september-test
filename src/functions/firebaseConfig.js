import firebase from 'firebase';
import 'firebase/auth'

// Configure Firebase.
const config  = {
    apiKey: "AIzaSyCR39Xr1jgt10YGIAy9JFSmZ0siimYv8cM",
    authDomain: "attainu-283422.firebaseapp.com",
    databaseURL: "https://attainu-283422.firebaseio.com",
    projectId: "attainu-283422",
    storageBucket: "attainu-283422.appspot.com",
    messagingSenderId: "304056703828",
    appId: "1:304056703828:web:76c4e1a49df69bf3d506c1"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
  
  
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};
 export default uiConfig