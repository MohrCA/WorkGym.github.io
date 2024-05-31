//ARRAY QUYE CONTIENE LAS IMÁGENES
let imagenes = [
    "./imagenes/img1.png",
    "./imagenes/img2.jpg",
    "./imagenes/img3.jpeg",
    "./imagenes/img4.jpeg"
];
//ARRAY DE LOS TEXTOS
let texto = [
    "Jorge: De principiante a competidor en carreras de obstáculos en un año, gracias a su dedicación y disciplina.",
    "Sofía: Ha encontrado paz y equilibrio con meditación y yoga, transformando su bienestar en menos de un año.",
    "Pablo: En solo seis meses, ha mejorado su salud y confianza a través de ejercicio y una buena alimentación.",
    "Matias: Gracias a nuestros entrenamientos orientados a la calistenia, logro aumentar 4kg de masa muscular"
];


let indice = 0;

function mostrarImagen() {
    let actImg = document.querySelector('.img');
    let actMsg = document.querySelector('.descrip');
    actImg.src = imagenes[indice];
    actMsg.textContent = texto[indice];
    texto.classname = "textos";
}


// BOTONES AVANZAR Y ATRÁS
function siguiente() {
    if (indice < imagenes.length - 1) {
        indice++;
    } else {
        indice = 0;
    }
    mostrarImagen();
}

function anterior() {
    if (indice > 0) {
        indice--;
    } else {
        indice = imagenes.length - 1;
    }
    mostrarImagen();
}

document.getElementById('btnIzq').addEventListener('click', prevImg);
document.getElementById('btnDer').addEventListener('click', siguienteImg);

mostrarImagen(indice);