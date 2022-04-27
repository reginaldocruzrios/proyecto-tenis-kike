// Creamos un elemento prendas

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Shorts licra fluid entrenamiento';
parrafo1.classList.add('prenda__titulo');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Prenda para hombre y Mujer';
parrafo2.classList.add('prenda__categoria');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$450';
parrafo3.classList.add('prenda__precio');

const divPrendasInfo = document.createElement('DIV');
divPrendasInfo.classList.add('prendas__info');

// añadimos los parrafos al divPrendasInfo
divPrendasInfo.appendChild(parrafo1);
divPrendasInfo.appendChild(parrafo2);
divPrendasInfo.appendChild(parrafo3);

const imagen = document.createElement('IMG');
imagen.src = 'img/prendas4.jpg';
imagen.alt = 'prenda';
imagen.classList.add('prendas_img');

const divPrendasImagen = document.createElement('DIV');
divPrendasImagen.classList.add('prendas__imagen');

// Añadimos la imagen 
divPrendasImagen.appendChild(imagen);

const divPrendas = document.createElement('DIV');
divPrendas.classList.add('prendas');

//Añadimos todo al divPrendas
divPrendas.appendChild(divPrendasImagen);
divPrendas.appendChild(divPrendasInfo);

// Añadirlo al HTML
const contenedorPrendas = document.querySelector('.basicos__prendas');
contenedorPrendas.appendChild(divPrendas);

console.log(divPrendas);

document.addEventListener('DOMContentLoaded' , function() {
    saludo();
});

function saludo() {
    const barraBtn = document.querySelector('#barra');
    console.log(barraBtn);

    barraBtn.addEventListener('click', function () {
        const navegacion = document.querySelector('.entrada__navegacion');

        navegacion.classList.toggle('mostrar');
    })
}

/*
document.addEventListener('DOMContentLoaded' , function() {
    calcularEstacionamiento();
})
function calcularEstacionamiento () {
    let a = ['serna' , 'dodge' , 'fiesta', 'camaro' , 'pickap'];
    let tiempo = 200;
    let pago = 2;
    let horasExtras;
    let minutos;
    let hora = 20;

    console.log(a);
    // Recorremos el arreglo
    for(let i = 0; i < a.length; i++){
        console.log(`los autos estacionados son: ${a}`);
    }  

    // escoge un carro del arreglo
    console.log(`Auto seleccionado: ${a[2]}`);

    // validamos los tiempos
    if (tiempo <= 180) {
        console.log(`El carro ${a[2]}, paga: ${pago} pesos`);
    } else if (tiempo > 180 ) {
        horasExtras  = (2 * .50) + pago;    
        console.log(`Por horas extras el pago es ${horasExtras} pesos`);
    }
}
*/



