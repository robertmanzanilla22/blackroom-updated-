/**
 * scripts/register.js
 * Escucha los formularios de Sign Up (modal + section) y Login
 */

import { registerUser, loginUser } from "./auth.js";

/* =========================
   1) FORMULARIO SIGNUP (MODAL)
========================= */
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
      await registerUser(name, email, password);
      // Cierra el modal o haz lo que requieras
      alert("Sign Up (modal) completado.");
    } catch (err) {
      console.error("Error al registrar (modal):", err);
    }
  });
}

/* =========================
   2) FORMULARIO REGISTER (SECTION)
========================= */
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await registerUser(name, email, password);
      alert("Sign Up (section) completado.");
      registerForm.reset();
    } catch (error) {
      console.error("Error al procesar el registro (section):", error);
    }
  });
}

/* =========================
   3) FORMULARIO LOGIN (MODAL)
========================= */
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      await loginUser(email, password);
      alert("Login completado.");
      // Cierra el modal o haz lo que gustes
    } catch (error) {
      console.error("Error al iniciar sesión (modal):", error);
    }
  });
}
