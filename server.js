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
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req,res) => {
    
    // index define is integer
    const index = parseInt(req.params.index);

    // regect out of range values
    if (Number.isNaN(index) || index < 0 || index >= collectibles.length) {
        res.send('<h1>This item is not yet in stock. Check back soon!</h1>')
    }
    // accept other numebrs
    else if (typeof index === 'number') {
        res.send(`<h1>So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!</h1>`);
    }
    
  })


// SHOES PAGE
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

app.get('/shoes/', (req,res) => {

    let filteredShoes = shoes;

    const minPrice = Number(req.query["min-price"]);
    const maxPrice = Number(req.query["max-price"]);
    const type = req.query.type;

if (!Number.isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  }

  if (!Number.isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }

  res.json(filteredShoes);

})

// SERVER LISTENER


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})