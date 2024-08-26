

let url = "https://api-colombia.com/"
const tableBody = document.getElementById('tableBody')

// fetch(url + `api/v1/InvasiveSpecie`).then(res => res.json()).then(data => console.log(data))

fetch(url + `api/v1/InvasiveSpecie`)
.then(res => res.json())
.then(data => renderTable(data))

function renderTable(speciesData) {

speciesData.forEach(specie => {
  const row = document.createElement('tr')
  row.classList.add(`risk${specie.riskLevel}`)

  row.innerHTML = `
    <td>${specie.name}</td>
    <td>${specie.scientificName}</td>
    <td>${specie.impact}</td>
    <td>${specie.manage}</td>
    <td>${specie.riskLevel}</td>
    <td><img src="${specie.urlImage}" alt="${specie.name}"></td>
  `

  tableBody.appendChild(row)
})
}