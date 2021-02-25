const sequelize=require("sequelize");
const db=require("../db");

class Category extends sequelize.Model{};

Category.init({  
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    modelName:"category",
})

module.exports=Category;