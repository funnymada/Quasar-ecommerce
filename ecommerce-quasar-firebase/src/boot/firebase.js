// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { boot } from "quasar/wrappers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFRVRGzBk13kKN2jw56GKfHiVnhNbct0k",
  authDomain: "testjacecommerce.firebaseapp.com",
  projectId: "testjacecommerce",
  storageBucket: "testjacecommerce.appspot.com",
  messagingSenderId: "440643760270",
  appId: "1:440643760270:web:1ef1772de54b7e218b19df",
  measurementId: "G-YJ5EPSW6ZT"
};
export const firebaseApp = initializeApp(firebaseConfig)
export default boot(({app}) => {

  console.log({ firebaseApp })
  app.config.globalProperties.$firebaseApp = firebaseApp;
})
