const db=require("../db/index")

const Post=require("./Post")
const Category=require("./Category")

Category.hasMany(Post)

module.exports= db