

// const altura = document.getElementById("altura")
// const peso = document.getElementById("peso")
// const IMC = document.getElementById("IMC")
// const calcularIMC = document.getElementById("calcularIMC")

// calcularIMC.addEventListener("click", function() {
//     const pesoValor = parseFloat(peso.value)
//     const alturaValor = parseFloat(altura.value)

//     const IMCvalor = (pesoValor)/(alturaValor*alturaValor)

//     IMC.innerHTML = `tu IMC es ${IMCvalor} `
// })


const colombia = document.getElementById("colombia")
const dolar = document.getElementById("dolar")


colombia.addEventListener("keyup", function() {
    const colombiaValor = parseFloat(colombia.value)
    dolar.value = colombiaValor/4052
})
dolar.addEventListener("keyup", function() {
    const dolarValor = parseFloat(dolar.value)
    colombia.value = dolarValor*4052
})