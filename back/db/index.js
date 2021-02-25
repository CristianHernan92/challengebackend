const sequelize=require("sequelize")

const db = new sequelize('challengebackend', 'cristian', '1234', {
    host:'localhost',
    dialect: 'mysql',
    logging: false,
})

module.exports=db;