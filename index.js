const express = require('express')
const {json} = require('express')
const connect = require("./config/dbConnection")
 const todos = require("./router/todoRoute");


const app = express()


app.use(json())
app.use('/todos',todos)



const PORT = process.env.PORT || 3000
app.listen(PORT,() => console.log('serving on port $(PORT)'))