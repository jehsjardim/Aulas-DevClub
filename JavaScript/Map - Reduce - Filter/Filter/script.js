const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => {
    if (number < 100 || number % 2 === 0) {
        return true
    }
    else{
        return false
    }
})

console.log(newList)



const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundetion: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundetion: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundetion: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundetion: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundetion: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundetion: 1976},
]

const newCompanies = companies.filter(company => {
    if (company.marketValue < 200 && company.foundetion > 1990) return true
    else false
})

console.log(newCompanies)