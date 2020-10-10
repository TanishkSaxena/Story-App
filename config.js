import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCfAyCg3RnT_fihPrObV_wghu71oTQbOls",
  authDomain: "storyapp-7ca4f.firebaseapp.com",
  databaseURL: "https://storyapp-7ca4f.firebaseio.com",
  projectId: "storyapp-7ca4f",
  storageBucket: "storyapp-7ca4f.appspot.com",
  messagingSenderId: "1039703451158",
  appId: "1:1039703451158:web:b58977405f4ffa61123737"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()