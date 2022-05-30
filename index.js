
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const name = req.query.name
  res.send(`Hello ${name}!`)
})

app.get('/square', (req, res) => {
  const num = Math.random();
  res.send(`The square of ${num} is ${num*num}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
==============================
1. Install nodejs
2. Create a nodejs project
3. Install express
4. Write an express route to return a random number
5. Write an express route to return the day of the week
**/

