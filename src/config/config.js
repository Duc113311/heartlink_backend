const firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCQNvZf4Kxu36oYP8jZvZR2qL12ao3rHak",
  authDomain: "app-heartlink.firebaseapp.com",
  databaseURL: "https://app-heartlink-default-rtdb.firebaseio.com",
  projectId: "app-heartlink",
  storageBucket: "app-heartlink.appspot.com",
  messagingSenderId: "136104391912",
  appId: "1:136104391912:web:6e37ae3f3e73b062c8455d",
  measurementId: "G-7F2VXPT5GR",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const authBase = firebase.auth;
const storage = firebase.storage();
const createBy = firebase.firestore.FieldValue.serverTimestamp();
auth.languageCode = "it";
// recapcha

const authjwt = {
  db,
  auth,
  authBase,
  storage,
  createBy
};
module.exports = authjwt;
