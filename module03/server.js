const express = require('express')
const nunjucks = require ("nunjucks")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")//setando o engine usando html

nunjucks.configure("views",{ //configurando o nujucks
    express: server
})

server.get("/", function (req, res) {
    return res.render("about")  //renderizar a página index
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio")  //renderizar a página classes
})

server.listen(5000, function () { //porta e depois a função//
    console.log("server ok")
}) 