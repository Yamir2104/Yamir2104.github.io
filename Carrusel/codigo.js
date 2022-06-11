//Solo trabajo en base a la clase carrusel
const carruseljs = document.querySelector(".carrusel")

let maxScrollLeft = carruseljs.scrollWidth - carruseljs.clientWidth

let intervalo = null
let step = 1

//Como se va ejecutar
const start = () =>{
    //tiempo que se ejecutara
    intervalo = setInterval(function(){
        //Avanzara segun los pasos izq
        carruseljs.scrollLeft = carruseljs.scrollLeft + step
        //Si llegan a terminar regresara hacia atras
        if(carruseljs.scrollLeft === maxScrollLeft){
            step = step * -1
        }
        else if(carruseljs.scrollLeft == 0){
            step = step * -1
        }
    },10
    )
}

//Detener la accion del movimiento
const stop = () =>{
    clearInterval(intervalo)
}

//Eventos que se daran con el mouse
carruseljs.addEventListener("mouseover", () =>{
    stop();
})

carruseljs.addEventListener("mouseout", () =>{
    start();
})

start();