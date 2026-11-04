
// ==========================================
// INICIO DE SESIÓN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {

            alert("Por favor, completa todos los campos.");

            return;
        }

        alert("Inicio de sesión correcto.");

    });

}


// ==========================================
// RECUPERAR CONTRASEÑA
// ==========================================

const forgotPassword =
    document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "La recuperación de contraseña estará disponible próximamente."
        );

    });

}


// ==========================================
// REGISTRO DE USUARIO
// ==========================================

// ==========================================
// REGISTRO DE USUARIO
// ==========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const role = document.getElementById("role").value;
        const terms = document.getElementById("terms").checked;


        // Comprobar campos vacíos

        if (
            username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "" ||
            role === ""
        ) {

            alert("Por favor, completa todos los campos.");

            return;
        }


        // COMPROBAR CONTRASEÑAS

        if (password !== confirmPassword) {

            alert("Las contraseñas no coinciden.");

            return;
        }


        // COMPROBAR TÉRMINOS

        if (!terms) {

            alert("Debes aceptar los términos y condiciones.");

            return;
        }


        // REGISTRO CORRECTO

        alert("Cuenta creada correctamente.");

        window.location.href = "index.html";

    });

}


// ==========================================
// TÉRMINOS Y CONDICIONES
// ==========================================

const termsLink =
    document.getElementById("termsLink");

if (termsLink) {

    termsLink.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Aquí se mostrarán los términos y condiciones de Agroanálisis."
        );

    });

}