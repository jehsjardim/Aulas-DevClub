const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundetion: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundetion: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundetion: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundetion: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundetion: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundetion: 1976},
]

const marketValueOldCompanies = companies.map(company => {
    company.marketValue = company.marketValue + ( company.marketValue / 10)

    return company
})
.filter( (company) => company.foundetion < 1990)
.reduce( (acc, company) => acc + company.marketValue, 0)

console.log(marketValueOldCompanies)