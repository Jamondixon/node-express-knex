const express = require('express')
const app = express()
const port = 3000

app.get('/students', (request, response) => {
    response.send({name: "Jamon"})
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})