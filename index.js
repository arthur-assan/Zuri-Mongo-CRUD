const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/TodoRoute')

const app = express()


// Databse Connection
mongoose.connect('mongodb+srv://rattleworm_xs:mfXnV88Ug7dAxa7I@cluster0.85syy5m.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Db connected')
}).catch((err)=>{
    console.log('Db not connected' + err)
})

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/", routes);

// Server configuration
app.listen(3000)