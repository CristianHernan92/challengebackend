const Sequelize = require('sequelize')

const express = require("express");
const router = express.Router();

const moment= require("moment")

const Post = require("../models/Post")
const Category = require("../models/Category");

//GET
router.get('/',(req,res)=>{
    Post.findAll({attributes: {exclude: ['content','updatedAt','createdAt']},order: [['date','DESC']]}).then(result=>res.send(result))  
})

//GET/:id
router.get('/:id',(req,res)=>{
    Post.findByPk(req.params.id,{attributes:{exclude: ['content','updatedAt','createdAt']}}).then(result=>{
        if(!result)
            res.send("the user whit id "+req.params.id+" not exist")
        res.send(result)
    })
})

//POST
router.post('/',(req,res)=>{   
     /* {
        "title":"Mensaje",
        "content":"contenido",
        "img":"asda.jpg",
        "category":"mensaje",
    } */
    let data=req.body
    if((/\.(jpg|png|gif)$/i).test(data.img))
        Category.findOne({where:{name:data.category}})        
        .then(result=> Post.create({
            title:data.title,
            content:data.content,        
            img:data.img,
            categoryId:result.id,
            date:moment().subtract(3, 'hours')
        })).then(result=>res.send(result))
    else
        res.send("enter a valid url image (jpg,png or gif)")
})

//PATCH/:id
router.patch('/:id',(req,res)=>{
    Post.findByPk(req.params.id).then(result=>{
        if(!result)
            res.send("the user whit id "+req.params.id+" not exist")
        if((/\.(jpg|png|gif)$/i).test(req.body.img))
            Post.update({title:req.body.title,content:req.body.content,img:req.body.img},{where:{id:req.params.id}})
            .then(result=>res.send("Update success !!!"))
        else
            res.send("enter a valid url image (jpg,png or gif)")  
    })        
})

//DELETE
router.delete('/:id',(req,res)=>{
    Post.destroy({where:{id:req.params.id}})
    .then(result=>{
        if(!result)
            res.send("the post whit id "+req.params.id+" not exist")
        res.send("Delete success !!!")
    })
})

module.exports = router