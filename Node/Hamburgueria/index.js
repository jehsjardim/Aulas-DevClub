const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())

const orders = []

const checkOrdersId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex( order => order.id === id)

    if (index < 0){
        return response.status(404).json({ error: "User not found"})
    }

    request.ordersIndex = index
    request.orderId = id

    next()
}

const checkUrlMethod = (request, response, next) =>{
    const url = request.url
    const method = request.method

    console.log(url)
    console.log(method)
    
    next()
}

app.post('/orders', (request, response) => {
    const {order, clienteName, price, status} = request.body

    const user = {id: uuid.v4(), order, clienteName, price, status }

    orders.push(user)
    return response.status(201).json(user)
})

app.get('/orders', (request, response) =>{
    return response.json(orders)
})

app.put('/orders/:id', checkOrdersId, checkUrlMethod, (request, response) => {
    const { order, clienteName, price, status} = request.body
    const index = request.ordersIndex
    const id = request.orderId

    const updateOrder = { id, order, clienteName, price, status }

    orders[index] = updateOrder

    return response.json(updateOrder)
})

app.delete('/orders/:id', checkOrdersId, checkUrlMethod, (request, response) => {
    const index = request.ordersIndex

    orders.splice(index,1)

    return response.status(204).json(orders)
})

app.get('/orders/:id', checkOrdersId, checkUrlMethod, (request, response) => {
    const { id } = request.params
        
    const index = orders.find( order => order.id === id)    

       return response.json(index)
})

app.patch('/orders/:id', checkOrdersId, checkUrlMethod, (request, response) => {
    const id = request.orderID
    const index = request.ordersIndex
    const {status} = request.body
  
    orders[index].status = status   
  
    return response.json(orders[index])
})

app.listen(port, () => {
    console.log(`😎 Server started on port ${port}`)
})
