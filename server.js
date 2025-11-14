// IMPORTS


const express = require('express')

// MIDDLEWARE


const app = express()


// ROUTES


// default page
app.get('/', (request, response)=> {
    response.send('<h1>Hello World</h1>')
})

// greeting page
app.get('/greeting/:name', (req, res)=> {
    res.send(`<h1>hello ${req.params.name}</h1>`)
})

// dice page
app.get('/roll/:num', (req, res)=> {
    const randomNum = Math.floor(Math.random() * req.params.num)
    res.send(`<h1>You rolled a ${randomNum}</h1>`)
    
})






// SERVER LISTENER
app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})