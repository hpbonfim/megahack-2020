require('dotenv').config()
const express = require("express")
const app = express()

// HTTP CONFIG
const http = require("http")
const hostname = process.env.HOST
const port = process.env.PORT
const morgan = require("morgan")
app.use(morgan("dev")) // http logs

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

// MONGODB CONFIG
const database = require("./database.config.js")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.connect(database.url, {
    useNewUrlParser: true,
    keepAlive: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado com sucesso ao Mongo")
  }).catch(error => {
    console.error("Erro de conexão", error)
    process.exit()
  })

//CORS MIDDLEWARE
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

// FUNCTION ROUTES
const functionRoutes = require("./api/routes/function")
app.use("/function", functionRoutes)

// USER ROUTES
const userRoutes = require("./api/routes/user")
app.use("/user", userRoutes)

// 404 ROUTES
app.use((req, res, next) => {
  const error = new Error("Não encontrado")
  error.status = 404
  next(error)
})

// ERROR ROUTES
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

// SERVER
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`BACKEND: http://${hostname}:${port}/`)
})