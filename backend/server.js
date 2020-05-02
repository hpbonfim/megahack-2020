require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")

app.use(morgan("dev")) // http logs
app.use(bodyParser.urlencoded({  extended: false })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

// Configuring the database
const database = require("./database.config.js")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise // Database Config
mongoose.set('useCreateIndex', true)
mongoose.connect(database.url, { useNewUrlParser: true, keepAlive: true, useUnifiedTopology: true})
.then(() => {
    console.log("Conectado com sucesso ao Mongo")
  }).catch(error => {
    console.error("Erro de conexão", error)
    process.exit()
})

//CORS middleware primary
 app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
     return res.status(200).json({})
    }
    next()
})

// //CORS middleware secondary
// app.use(cors())

//function routes
const functionRoutes = require("./api/routes/function")
app.use("/function", functionRoutes)

//routes
const userRoutes = require("./api/routes/user")
app.use("/user", userRoutes)

app.use((req, res, next) => {
  const error = new Error("Não encontrado")
  error.status = 404
  console.log(error)
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  console.error(error)
  res.json({
    error: {
      message: error.message
    }
  })
})

//http calls
const http = require("http")
const server = http.createServer(app)
const hostname = process.env.HOST;
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`BACKEND: http://${hostname}:${port}/`)
})