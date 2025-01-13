/**
 * src/config/firebase-init.js
 * Inicializa la aplicación de Firebase con tu configuración.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

// Reemplaza con TUS credenciales del proyecto
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg12345",
  measurementId: "G-XXXXXXXXXX"
};

// Inicializa la app de Firebase con la configuración
const app = initializeApp(firebaseConfig);

console.log("Firebase se ha inicializado correctamente.");

export default app;
