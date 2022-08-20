import { initializeApp } from "firebase/app";
const initializeAuthentication = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB3TE-7UT5ilK6u4uHaEGhxQm9oDG99wHY",
    authDomain: "printup-61eb6.firebaseapp.com",
    projectId: "printup-61eb6",
    storageBucket: "printup-61eb6.appspot.com",
    messagingSenderId: "968052814504",
    appId: "1:968052814504:web:f9b62185a055353f8cc89d",
  };
  const app = initializeApp(firebaseConfig);
};

export default initializeAuthentication;
