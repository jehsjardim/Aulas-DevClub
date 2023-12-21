const cart = [10, 244, 99, 2, 20, 33, 250]
let soma = 0
let finalValueWithDiscount = 0

for (let i = 0; i < cart.length; i++) {
    soma += cart[i];
}

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    
if (value > 30){
    const discount = calculateDiscount(value, 10)
    finalValueWithDiscount = finalValueWithDiscount + (value - discount)
}   else {

    finalValueWithDiscount += value
}    
});

console.log(`O valor final da compra foi R$ ${soma.toFixed(2)},
porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)},
você economizou: R$ ${soma - finalValueWithDiscount.toFixed(2)}`)

