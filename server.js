// IMPORTS


const express = require('express')

// MIDDLEWARE


const app = express()


// ROUTES


// default page
app.get('/boop', (req, res)=> {
    res.send('<h1>Hello World</h1>')
})

// greeting page
app.get('/greeting/:name', (req, res)=> {
    res.send(`<h1>hello ${req.params.name}</h1>`)
})

// dice page
app.get('/rolls/:num', (req, res)=> {
    

    const reqNum = parseInt(req.params.num)
   
    // console.log(reqNum)
    // console.log(typeof reqNum)
    
    if (!reqNum) {
    res.send('<h1>That is not a number</h1>')
   }

    else if (typeof reqNum == 'number') {
    const result = Math.floor(Math.random() * reqNum)
    res.send(`<h1>you rolled a ${result}</h1>`)
   }
    
})


// COLLECTIBLES PAGE
//   const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//   ];


  app.get('/collectibles/:itemNum', (req, res)=> {
    res.send(`<h1>this is ${req.params.itemNum}</h1>`)
})







// SERVER LISTENER
app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})