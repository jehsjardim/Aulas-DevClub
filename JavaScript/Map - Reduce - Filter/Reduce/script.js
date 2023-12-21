/*const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    console.log(acumulador + ' acc')
    console.log(valorAtual + ' valorAtual')
    return acumulador + valorAtual
}, 0)

console.log(sum)*/

/*const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundetion: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundetion: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundetion: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundetion: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundetion: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundetion: 1976},
]

const marketValue = companies.reduce((acc, value) => {
    return acc + value.marketValue

}, 0)

console.log(marketValue)*/

const cart = [
    {productName: 'Abóbora', pricePerKg: 5, kg: 1},
    {productName: 'Pepino', pricePerKg: 3.55, kg: 1.3},
    {productName: 'Limão', pricePerKg: 1.2, kg: 2},
    {productName: 'Abacate', pricePerKg: 5.4, kg: 1.67},
    {productName: 'Morango', pricePerKg: 11.9, kg: 3},
]

const finalValue = cart.reduce((acc, value) => {
const result = value.pricePerKg * value.kg

    return acc + result
}, 0)

console.log(`A sua compra ficou no total de: ${finalValue}`)