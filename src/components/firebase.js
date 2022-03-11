import firebase from "@react-native-firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAzYktjhcS5DLkXb0t1R0L6EzrldU6Vdc",
  authDomain: "instagram-clone-ca87f.firebaseapp.com",
  projectId: "instagram-clone-ca87f",
  storageBucket: "instagram-clone-ca87f.appspot.com",
  messagingSenderId: "247425374798",
  appId: "1:247425374798:web:8690500fc41cbf78c5811f",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
