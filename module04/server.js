const express = require('express')
const nunjucks = require ("nunjucks")
const routes = require('./routes')
const server = express()

server.use(express.urlencoded({extended:true}))
server.use(express.static('public'))
server.use(routes)
server.set("view engine", "njk")//setando o engine usando html

nunjucks.configure("views",{ //configurando o nujucks
    express: server,
    autoescape:false,
    noCache:true    
})


server.listen(5000, function () { //porta e depois a função//
    console.log("server ok")
})  

