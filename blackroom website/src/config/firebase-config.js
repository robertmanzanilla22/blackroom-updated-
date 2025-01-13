// Importar Firebase
import app from "../config/firebase-init.js";
const firebaseConfig = {
    apiKey: "AIzaSyBafvmG9geHibJ-gMI5Wtjp92ROv6K1Jsk",
    authDomain: "blackroom-497c4.firebaseapp.com",
    projectId: "blackroom-497c4",
    storageBucket: "blackroom-497c4.firebasestorage.app",
    messagingSenderId: "335984721683",
    appId: "1:335984721683:web:e3ee0ea94475762e9ca4e6",
    measurementId: "G-WXKP6E3FY2"
  };
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase está conectado correctamente");

export default app;