
function tabla() {
    const num = prompt("ingrese el numero")
    const arrayTabla = []
    for (let i = 1; i<11; i++ ){
        arrayTabla.push(num*i)
    }
    console.log(arrayTabla)
}

function numeroCero() {
    const arrayNums = []
    let numCero = 1; 

    while (numCero !== 0) {
        numCero = parseFloat(prompt("Ingrese un número (0 para detenerse):"))
        if (numCero !== 0) {
            arrayNums.push(numCero)
        }
    }

    console.log(arrayNums);
}

function adivinar() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1
    console.log(numeroAleatorio);
    let intento = 0
    let intentos = 1
    while (intento !== numeroAleatorio) {
        intento = parseInt(prompt("guess the number in 1 to 100"))
        if (intento === numeroAleatorio){
            console.log("congratulations, attemps: " + intentos);
            break
        }else if (intento < numeroAleatorio){
            console.log("try a larger number");
            intentos++
        }else{
            console.log("try a smaller number");
            intentos++
        }

    }
}

function numPrimo() {
    let primo = parseInt(prompt("what number do you want to test"))
    let sum = 0
    for (i=1; i<(primo/2 + 1); i++ ){
        
        if (primo%i === 0){
            sum++
        }
    }
    if (sum === 1){
        console.log("the numers is a prime number");
    }else {
        console.log("the number is NOT a prime number");
    }
}

function divisores() {
    let number = parseInt(prompt("what number do you want to know its dividers?"))
    let sum = []
    for (i=1; i<(number + 1); i++ ){
        
        if (number%i === 0){
            sum.push(i)
        }
    }
    console.log(sum);
}

function renderLog(array) {
    for (i=0; i<array.length; i++){
        console.log(array[i]);
    }
}
function renderLogDoble(array) {
    for (i=0; i<array.length; i++){
        console.log(array[i]*2);
    }
}

function presentarFamilia(familia) {
    for (let i = 0; i < familia.length; i++) {
        const miembro = familia[i];
        console.log(`Hola, mi nombre es ${miembro.nombre}, tengo ${miembro.edad} años, soy el/la ${miembro.parentesco} y mi ocupación es ${miembro.ocupacion}.`)
    }
}

function renderImpares(array) {
    for (i=0; i<array.length; i++){
        if (array[i]%2 === 1){
            console.log(array[i]);
        }
        
    }
}

function sumParImpar() {
    let sumImpar = 0
    let sumPar = 0
    let num = 1
    while (num !== 0) {
        num = parseInt(prompt("sumbit a number, 0 to stop"))
        if (num === 0 ) {
            break
        }else if (num%2 === 0){
            sumPar += num
        } else {
            sumImpar += num

        }

    }
    console.log(`even numbers sum ${sumPar}, odd numbers sum ${sumImpar}`);
}

function renderMayor(array) {
    let num = array[0]
    for (i=1; i<array.length; i++){
        if (num < array[i]){
            num = array[i]

        }
        
    }
    console.log(`the number is ${num}`);
}

function renderMenor(array) {
    let num = array[0]
    for (i=1; i<array.length; i++){
        if (num > array[i]){
            num = array[i]

        }
        
    }
    console.log(`the number is ${num}`);
}

function rockPaperScissors() {
    let player1
    let player2
    while (player1 === player2) {
        player1 = prompt("player1: rock, paper, scissors ?")
        player2 = prompt("player2: rock, paper, scissors ?")
        if (player1 === player2){
            console.log("draw");
        } else if ((player1 === "rock") && (player2 === "scissors")){
            console.log("player1 wins");
            break
        } else if ((player1 === "paper") && (player2 === "rock")){
            console.log("player1 wins");
            break
        } else if ((player1 === "scissors") && (player2 === "paper")){
            console.log("player1 wins");
            break
        } else{
            console.log("player2 wins");
            break
        }  
    }
}

function triangulo() {
    let n = 5
    let a = "*"
    for (let i = 1; i <= n; i++) {
        console.log((a).repeat(i))
    }
}

function trianguloInvertido() {
    let n = 5
    for (let i = n; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}









const arrayNums = [1, 2, 3, 4, 5, 6, 7, 14, 9, 10]

document.getElementById("btn1").addEventListener("click", () => tabla())
document.getElementById("btn2").addEventListener("click", () => numeroCero())
document.getElementById("btn3").addEventListener("click", () => adivinar())
document.getElementById("btn4").addEventListener("click", () => numPrimo())
document.getElementById("btn5").addEventListener("click", () => divisores())
document.getElementById("btn6").addEventListener("click", () => renderLog(arrayNums))
document.getElementById("btn7").addEventListener("click", () => renderLogDoble(arrayNums))
document.getElementById("btn8").addEventListener("click", () => presentarFamilia(familia))
document.getElementById("btn9").addEventListener("click", () => renderImpares(arrayNums))
document.getElementById("btn10").addEventListener("click", () => sumParImpar())
document.getElementById("btn11").addEventListener("click", () => renderMayor(arrayNums))
document.getElementById("btn12").addEventListener("click", () => renderMenor(arrayNums))
document.getElementById("btn13").addEventListener("click", () => rockPaperScissors())
document.getElementById("btn14").addEventListener("click", () => triangulo())
document.getElementById("btn15").addEventListener("click", () => trianguloInvertido())
document.getElementById("btn16").addEventListener("click", () => divisores())


const familia = [
    {
        nombre: "Juan",
        edad: 45,
        parentesco: "Padre",
        ocupacion: "Ingeniero"
    },
    {
        nombre: "María",
        edad: 42,
        parentesco: "Madre",
        ocupacion: "Doctora"
    },
    {
        nombre: "Carlos",
        edad: 18,
        parentesco: "Hijo",
        ocupacion: "Estudiante"
    },
    {
        nombre: "Ana",
        edad: 16,
        parentesco: "Hija",
        ocupacion: "Estudiante"
    },
    {
        nombre: "Luis",
        edad: 70,
        parentesco: "Abuelo",
        ocupacion: "Jubilado"
    }
]