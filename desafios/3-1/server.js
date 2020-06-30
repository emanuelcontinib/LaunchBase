const express = require('express')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")//setando o engine usando html


server.get("/", function (req, res) {
    return res.render("2-3")  //renderizar a página index
})

server.listen(4000, function () { //porta e depois a função//
    console.log("server ok")
}) 