/**
 * scripts/auth.js
 * Contiene funciones para registrar e iniciar sesión de usuarios.
 */

// Importa la app inicializada
import app from "../src/config/firebase-init.js";

// Importa los servicios de Firebase que se usan
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Inicializa Auth y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Registra un usuario en Firebase Auth y guarda datos en Firestore
 */
export async function registerUser(name, email, password) {
  try {
    // 1) Crea el usuario en Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario creado en Auth:", user);

    // 2) Guarda la info en Firestore (colección "users")
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: new Date().toISOString()
    });
    console.log("Datos guardados en Firestore.");

    alert(`Registro exitoso. ¡Bienvenido, ${name}!`);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    alert("Hubo un error al registrar. Inténtalo de nuevo.");
  }
}

/**
 * Inicia sesión con correo y contraseña
 */
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario autenticado:", user);

    alert("Inicio de sesión exitoso. ¡Bienvenido de nuevo!");
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Hubo un error al iniciar sesión. Verifica tus credenciales.");
  }
}
