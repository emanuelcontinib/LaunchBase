const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk") //setando o motor engine usando html

nunjucks.configure("views", { //configurando o nujucks
    express: server
})

server.get("/", function (req, res) {
    return res.render("home")}) //renderizar a página home


server.get("/about", function (req, res) {
    return res.render("about") //renderizar a página classes
})

server.get("/courses", function (req, res) {
    return res.render("courses") //renderizar a página classes
})

server.use(function (req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function () { //porta e depois a função//
    console.log("server ok")
})