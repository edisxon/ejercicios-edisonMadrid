
// import { renderCards } from "./home.js"

let url = "https://api-colombia.com/";

const params = new URLSearchParams(window.location.search)
const departamentoId = params.get('id')

const titulo = document.getElementById("titulo")
const introduccion = document.getElementById("introduccion")
const citiesContainer = document.getElementById("citiesContainer")
const naturalContainer = document.getElementById("naturalContainer")
const searchInput = document.getElementById("searchInput")
const filterCities = document.getElementById("filterCities")
const filterNaturalAreas = document.getElementById("filterNaturalAreas")

let cities = []
let naturalAreas = []



fetch(url + `api/v1/Department/${departamentoId}`)
    .then(res => res.json())
    .then(res => {
        
        
        titulo.innerHTML = res.name;
        introduccion.innerHTML = res.description
    })

fetch(url + `api/v1/Department/${departamentoId}/cities`)
    .then(res => res.json())
    .then(res => {
        
        cities = res;
        filterAndRender()

    })


fetch(url + `api/v1/Department/${departamentoId}/naturalareas`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let objetoDepartamento = res[0]
        console.log(objetoDepartamento);
        naturalAreas = objetoDepartamento.naturalAreas
        filterAndRender()
        
 
})






function renderCards (array, container){
  
    
    

    array.forEach(element => { 
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `
         <div class="card-body">
            <h5 class="card-title" id="cardTitulo">${element.name}</h5>
            <p class="card-text">Area: ${element.landArea}</p>
            
         </div>`
        container.appendChild(div)
    })
}

function renderCards2 (array, container){
  
    array.forEach(element => { 
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `
         <div class="card-body">
            <h5 class="card-title" id="cardTitulo">${element.name}</h5>
            <p class="card-text">Pronto habrá una descripcion de cada ciudad</p>
            
         </div>`
        container.appendChild(div)
    })
}

function filterAndRender() {
    const searchTerm = searchInput.value.toLowerCase()
    naturalContainer.innerHTML =``
    citiesContainer.innerHTML =``
    
    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(searchTerm))
    if (filterCities.checked) {
        renderCards2(filteredCities, citiesContainer)
    } else {
        citiesContainer.innerHTML = ''
    }

    
    const filteredNaturalAreas = naturalAreas.filter(area => area.name.toLowerCase().includes(searchTerm))
    if (filterNaturalAreas.checked) {
        renderCards(filteredNaturalAreas, naturalContainer)
    } else {
        naturalContainer.innerHTML = '' 
    }
}


searchInput.addEventListener("input", filterAndRender)
filterCities.addEventListener("change", filterAndRender)
filterNaturalAreas.addEventListener("change", filterAndRender)