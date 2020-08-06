const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const cards = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk") //setando o motor engine usando html

nunjucks.configure("views", { //configurando o nujucks
    express: server,
    autoescape:false
})

server.get("/", function (req, res) {
    return res.render("home")}) //renderizar a página home


server.get("/about", function (req, res) {
    const about = {
        src:`https://www.reshape.com.br/assets/uploads/rocketseat.png`,
        h3:"Treinamento imersivo nas tecnologias mais modernas de desenvolvimento",
        modules: "13 módulos",
        coast: 'R$ Pago'
    }
    return res.render("about", {about}) //renderizar a página classes
})

server.get("/courses", function (req, res) {
    return res.render("courses", {items:cards}) //renderizar a página classes
})

server.use(function (req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function () { //porta e depois a função//
    console.log("server ok")
})