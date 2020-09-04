require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const inventoryCtrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/inventory', inventoryCtrl.getAllProducts)
app.post('/api/inventory', inventoryCtrl.addProducts)

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log('DB is live.')
    app.listen(SERVER_PORT, () => {
      console.log(`${SERVER_PORT} is live.`)
    })
  })
  .catch(err => console.log(err))