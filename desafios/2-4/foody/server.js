const express = require('express')
const nunjucks = require ('nunjucks')

const server = express()
const recipes = require("./data")
server.use(express.static('public'))

server.set("view engine", "njk")//setando o engine usando html

nunjucks.configure("views",{ //configurando o nujucks
    express: server,
    autoescape:false,
    noCache:true    
})

server.get("/home", function (req, res) {
    return res.render("home")  //renderizar a página classes
})
server.get("/layout", function (req, res) {
    return res.render("layout")  //renderizar a página classes
})

server.get("/sobre", function (req, res) {
    return res.render("sobre")  //renderizar a página classes
})

server.get("/receitas", function (req, res) {
    return res.render("receitas")  //renderizar a página classes
})
server.listen(5000, function () { //porta e depois a função//
    console.log("server ok")
})   