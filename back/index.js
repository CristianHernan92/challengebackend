const express = require('express')
const app= express()
const volleyball = require('volleyball')

//import db
const db= require('./models/index')
//import routes
const router= require('./routes/index')

app.use(volleyball);

//Bodyparsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",router);

//error middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

db.sync({force:false}).then(app.listen(3000,()=>{
    console.log("runing in port 3000 !!!");
}))