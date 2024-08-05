
function esMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`)
    } else {
        console.log(`${num1} no es mayor que ${num2}`)
    }
}


function sonIguales(num1, num2) {
    if (num1 === num2) {
        console.log('Los números son iguales')
    } else {
        console.log('Los números son diferentes')
    }
}


function cualEsMasGrande(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es más grande que ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} es más grande que ${num1}`)
    } else {
        console.log('Los números son iguales')
    }
}


function elMasChico(num1, num2, num3) {
    let menor = num1;
    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }
    console.log(`El número más chico es ${menor}`);
}


function compararPersonas(persona1, persona2) {
    if (persona1.altura > persona2.altura) {
        console.log(`${persona1.nombre} es más alto(a) que ${persona2.nombre}`)
    } else if (persona1.altura < persona2.altura) {
        console.log(`${persona2.nombre} es más alto(a) que ${persona1.nombre}`)
    } else {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura`)
    }

    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`)
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`)
    } else {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma edad`)
    }
}

function puedeConducir() {
    let nombre = prompt('Ingrese su nombre:')
    let edad = parseInt(prompt('Ingrese su edad:'))
    let altura = parseFloat(prompt('Ingrese su altura en cm:'))
    let vision = parseFloat(prompt('Ingrese su visión (de 1 a 10):'))

    if (edad >= 18 && altura > 150 && vision >= 8) {
        console.log(`${nombre}, estás capacitado para conducir.`)
    } else {
        console.log(`${nombre}, no estás capacitado para conducir.`)
    }
}


function verificarAcceso() {
    const nombre = prompt("Ingresa tu nombre:")
    const pase = prompt("¿Tienes pase? (vip o normal):")
    const entrada = prompt("¿Tienes entrada? (si/no, s/n, true/false):")

    if (nombre === "edison" || pase === "vip" || entrada === "si" || entrada === "s" || entrada === "true") {
        console.log("Bienvenido")
    } else if (entrada === "no" || entrada === "n" || entrada === "false") {
        const quiereComprar = prompt("¿Quieres comprar una entrada? (si/no):")
        if (quiereComprar === "si" ) {
            const dineroDisponible = parseFloat(prompt("¿Cuánto dinero tienes disponible?"))
            if (dineroDisponible >= 1000) {
                console.log("Venta realizada, Bienvenido")
            } else {
                console.log("Dinero insuficiente. Venta rechazada.")
            }
        } else {
            console.log("Despedida.");
        }
    }
}

function juegoAdivinanza() {
    const numeroIncognita = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    console.log(numeroIncognita)

    function intentarAdivinar() {
        if (intentos === 0) {
            console.log("Lo siento, no adivinaste el número.")
            return;
        }

        const numeroIngresado = prompt("Ingresa un número del 1 al 10:")

        if (numeroIngresado == numeroIncognita) { 
            console.log("Ganaste, haz adivinado el número.")
        } else {
            intentos--
            if (numeroIngresado > numeroIncognita) {
                console.log("El número ingresado es mayor, vuelve a intentarlo.")
            } else {
                console.log("El número ingresado es menor, vuelve a intentarlo.")
            }
            intentarAdivinar()
        }
    }

    intentarAdivinar()
}

function clasificarEdad() {
    const edad = parseInt(prompt("Ingresa tu edad:"))
    if (edad <= 12) {
        console.log("Eres un infante.")
    } else if (edad <= 18) {
        console.log("Eres un adolescente.")
    } else if (edad <= 45) {
        console.log("Eres un mayor joven.")
    } else if (edad <= 100) {
        console.log("Eres un anciano.")
    } else {
        console.log("¿Realmente tienes esa edad?")
    }
}

function piedraPapelTijeras() {
    const jugador1 = prompt("Jugador 1: Ingresa PIEDRA, PAPEL o TIJERAS:").toUpperCase()
    const jugador2 = prompt("Jugador 2: Ingresa PIEDRA, PAPEL o TIJERAS:").toUpperCase()

    const opcionesValidas = ["PIEDRA", "PAPEL", "TIJERAS"]

    if (!opcionesValidas.includes(jugador1) || !opcionesValidas.includes(jugador2)) {
        console.log("Uno de los jugadores ha hecho trampa.");
        return;
    }

    if (jugador1 === jugador2) {
        console.log("Han empatado.");
    } else if ( (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") || (jugador1 === "PAPEL" && jugador2 === "PIEDRA") || (jugador1 === "TIJERAS" && jugador2 === "PAPEL") ) {
        console.log("Jugador 1 ha ganado.");
    } else {
        console.log("Jugador 2 ha ganado.");
    }
}

function describeColor() {
    const color = prompt("Ingresa un color:")

    switch (color) {
        case "blanco":
        case "negro":
            console.log("Falta de color")
            break;
        case "verde":
            console.log("El color de la naturaleza")
            break;
        case "azul":
            console.log("El color del agua")
            break;
        case "amarillo":
            console.log("El color del sol")
            break;
        case "rojo":
            console.log("El color del fuego")
            break;
        case "marrón":
            console.log("El color de la tierra")
            break;
        default:
            console.log("Excelente elección, no lo teníamos pensado.")
    }
}

function realizarOperacion() {
    const num1 = prompt("Ingresa el primer número:");
    const num2 = prompt("Ingresa el segundo número:");
    const operacion = prompt("Ingresa la operación (suma, resta, multiplicación, division):").toLowerCase();
    
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = Number(num1) + Number(num2)
            console.log(`El resultado de la suma es: ${resultado}`)
            break;
        case "resta":
            resultado = Number(num1) - Number(num2)
            console.log(`El resultado de la resta es: ${resultado}`)
            break;
        case "multiplicación":
        case "multiplicacion":
            resultado = Number(num1) * Number(num2)
            console.log(`El resultado de la multiplicación es: ${resultado}`)
            break;
        case "división":
        case "division":
            if (Number(num2) == 0) {
                console.log("ERROR: No se puede dividir por 0");
            } else {
                resultado = Number(num1) / Number(num2)
                console.log(`El resultado de la división es: ${resultado}`)
            }
            break;
        default:
            console.log("Operación no válida")
    }
}

function registrarDNI() {
    const nombre = prompt("Ingresa tu nombre:")
    const apellido = prompt("Ingresa tu apellido:")
    const numero = prompt("Ingresa tu número de DNI:")
    const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento:")

    console.log(`Datos ingresados:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Número de DNI: ${numero}
    Fecha de Nacimiento: ${fechaNacimiento}`)

    const confirmar = prompt("¿Son correctos los datos ingresados? (si/no)")
    if (confirmar === "si") {
        const dni = {
            nombre: nombre,
            apellido: apellido,
            numero: numero,
            fechaNacimiento: fechaNacimiento
        }
        console.table(dni)
        console.log("Registro exitoso.")
    } else {
        console.log("Vuelva a intentarlo en 1 mes.")
    }
}


const Uno = document.getElementById("btn1").addEventListener("click", function(){
    esMayor(2,4)
})

const dos = document.getElementById("btn2").addEventListener("click", function(){
    sonIguales(4,4)
})

const tres = document.getElementById("btn3").addEventListener("click", function(){
    cualEsMasGrande(10, 5)
})

const cuatro = document.getElementById("btn4").addEventListener("click", function(){
    elMasChico(10, 5, 2)
})

const cinco = document.getElementById("btn5").addEventListener("click", function(){
    let persona1 = { nombre: 'Juan', edad: 30, altura: 175 };
    let persona2 = { nombre: 'Pedro', edad: 25, altura: 180 };
    compararPersonas(persona1, persona2);
})

const seis = document.getElementById("btn6").addEventListener("click", function(){
    puedeConducir()
})

const siete = document.getElementById("btn7").addEventListener("click", function(){
    verificarAcceso()
})

const ocho = document.getElementById("btn8").addEventListener("click", function(){
    juegoAdivinanza()
})

const nueve = document.getElementById("btn9").addEventListener("click", function(){
    clasificarEdad()
})

const diez = document.getElementById("btn10").addEventListener("click", function(){
    piedraPapelTijeras()
})

const once = document.getElementById("btn11").addEventListener("click", function(){
    describeColor()
})

const doce = document.getElementById("btn12").addEventListener("click", function(){
    realizarOperacion()
})

const trece = document.getElementById("btn13").addEventListener("click", function(){
    registrarDNI()
})

