const sequelize=require("sequelize");
const db=require("../db");

class Post extends sequelize.Model{};

Post.init({  
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    title:{
        type:sequelize.STRING,
        allowNull:false
    },
    content:{
        type:sequelize.STRING,
        allowNull:false
    },
    img:{
        type:sequelize.STRING,
        allowNull:false
    },
    date:{
        type:sequelize.DATE,
        allowNull:false
    },
},{
    sequelize:db,
    modelName:"post",
})

module.exports=Post;