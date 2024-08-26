let url = "https://api-colombia.com/"

const introduccion = document.getElementById("introduccion")
const cardsContainer = document.getElementById("cardsContainer")
const searchInput = document.getElementById("searchInput")

fetch(url + "/api/v1/Country/Colombia")
.then(res => res.json()).then(res => introduccion.innerHTML = res.description)

fetch(url + "/api/v1/Department").then(res => res.json()).then(res => {
    renderCards(res, cardsContainer)

    searchInput.addEventListener("keyup", () => {
        filterCards(res, searchInput.value)
    })
})


fetch(url + "/api/v1/region").then(res => res.json()).then(res => console.log(res))



export function renderCards (array, container){
    container.innerHTML = ``


    array.forEach(element => { 
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
         <div class="card-body">
            <h5 class="card-title" id="cardTitulo">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <a href="./pages/details.html?id=${element.id}" class="btn btn-primary">Detalles</a>
         </div>`
        container.appendChild(div)
    })
}



function filterCards(array, searchValue) {
    const filteredArray = array.filter(element =>
        element.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    renderCards(filteredArray, cardsContainer)
}
