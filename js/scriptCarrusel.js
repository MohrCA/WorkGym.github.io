const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');




punto.forEach((cadaPunto, i) => {
    cadaPunto.addEventListener('click', () => {

        let posicion = i;
        let operacion = posicion * -40;

        grande.style.transform = `translateX(${operacion}%)`;

        punto.forEach((cadaPunto, j) => {

            punto[j].classList.remove('activo');

        });
        cadaPunto.classList.add('activo');

    });
});