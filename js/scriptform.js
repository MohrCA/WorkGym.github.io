document.addEventListener("DOMContentLoaded", function() {
    console.log("Script cargado");
    const form = document.querySelector(".contactForm");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        //ARREGLO PARA ALMECENAR LOS PUSH DE ERRORES
        let errores = [];

        //VALIDACIONES!!

        //VALIDAR NOMBRE
        if (nombre === "") {
            errores.push("El campo nombre es obligatorio.");
        } else if (nombre.length > 50) {
            errores.push("El campo nombre no puede tener más de 50 caracteres.");
        }else if (!/^[a-zA-Z ]+$/.test(nombre)) {
            errores.push("El nombre debe contener solo letras.");
        }

        //VALIDAR EMAIL 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errores.push("El campo email es obligatorio.");
        } else if (!emailRegex.test(email)) {
            errores.push("El campo email debe ser un email válido.");
        }

        //VALIDAR TELEFONO
        const telefonoRegex = /^\d{10}$/;
        if (telefono === "") {
            errores.push("El campo teléfono es obligatorio.");
        } else if (!telefonoRegex.test(telefono)) {
            errores.push("El campo teléfono debe contener 10 dígitos numéricos.");
        }

        //VALIDAR MENSAJE
        if (mensaje === "") {
            errores.push("El campo mensaje es obligatorio.");
        } else if (mensaje.length > 300) {
            errores.push("El campo mensaje no puede tener más de 300 caracteres.");
        }

        //CONDICIONAL PARA MOSTRAR LOS MENSAJES TANTO PARA ERRORES COMO PARA LOS DE ENVIADO CORRECTAMENTE!

        //LOS ERRORES
        if (errores.length > 0) {
            resultado.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li></ul>";
            resultado.className = "error"; 

        //DATOS CORRECTOS
        } else {
            resultado.innerHTML = `
                <h3>Datos enviados correctamente:</h3>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `;
            resultado.className = "success"; 
        }

        resultado.scrollIntoView({ behavior: 'smooth' }); 
    });
});

