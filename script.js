function validarLogin() {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "adminaeropuerto" && contrasena === "Basededatos33") {
        window.location.href = "panel.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function mostrarAlertaValija() {
    alert("Persona agregada");
}

function mostrarAlertaVuelo() {
    alert("Vuelo registrado satisfactoriamente");
}