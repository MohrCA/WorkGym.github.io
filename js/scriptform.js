document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const resultDiv = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        let errores = "";

        if (nombre === "") {
            errores += "Por favor, ingresa tu nombre.<br>";
        }

        if (email === "") {
            errores += "Por favor, ingresa tu correo electrónico.<br>";
        } else if (!validarEmail(email)) {
            errores += "Por favor, ingresa un correo electrónico válido.<br>";
        }

        if (mensaje === "") {
            errores += "Por favor, ingresa un mensaje.<br>";
        }

        if (errores === "") {
            // Si no hay errores, mostrar los datos enviados
            const resultadoHTML = `<p>Nombre: ${nombre}</p>
                                   <p>Email: ${email}</p>
                                   <p>Mensaje: ${mensaje}</p>`;
            resultDiv.innerHTML = resultadoHTML;
        } else {
            // Mostrar los errores
            resultDiv.innerHTML = `<div style="color: red;">${errores}</div>`;
        }
    });

    // Función para validar el formato del correo electrónico
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
