const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonDescont = document.querySelector('.show-descont')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilter = document.querySelector('.filter')

function formatCurrency(value){
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
  return newValue
}

function showAll (producsArray) {
  let myLi = ''

  producsArray.forEach((product) => {
  myLi += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p class="item-price">R$ ${formatCurrency(product.price)}</p>
    </li>
  `
}) 
list.innerHTML = myLi
}

function showDescont(){
const newPrices = menuOptions.map((product) => ({
  ...product,//Spread Operator
  price: product.price * 0.9,
}))

showAll(newPrices)
}

function sumAll(){
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
    <li>
      <p>O Valor Total dos Ítens é R$ ${totalValue}</p>
    </li>
    `
}

function filter(){
  const newFilter = menuOptions.filter((product) => product.vegan)
 
showAll(newFilter)
}

buttonShowAll.addEventListener('click', () =>  showAll(menuOptions))
buttonDescont.addEventListener('click', showDescont)
buttonSumAll.addEventListener('click', sumAll)
buttonFilter.addEventListener('click', filter)