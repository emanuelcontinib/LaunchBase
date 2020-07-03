const express = require('express')
const nunjucks = require ("nunjucks")

const server = express()
const videos = require("./data")
server.use(express.static('public'))

server.set("view engine", "njk")//setando o engine usando html

nunjucks.configure("views",{ //configurando o nujucks
    express: server,
    autoescape:false
})

server.get("/about", function (req, res) {
    const about = {
        avatar_url:"https://scontent.fpoa1-1.fna.fbcdn.net/v/t1.0-9/79972495_2706082946122454_4086648329738387456_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeE8ELOSFi7_jmEi5GxLMxbgRP0214E_aR1E_TbXgT9pHQ9Ojkrp3g1mohHVjgTC59ditd4ewq85JcBkE1_DIyNi&_nc_ohc=kJOnc11tmMwAX_rqttC&_nc_ht=scontent.fpoa1-1.fna&oh=6731858e40031f60352ff423b6c51c21&oe=5F246F3B",
        name:"Emanuel Contini Bertol",
        learn:"Aluno Rocketseat Launchbase Bootcamp",
        role:'Desenvolvedor Fullstack Júnior/ Analista de Suporte na <a href="https://weecode.com.br" target="_blank">Weecode',
        link: [
            {name:"Github", url: "https://github.com/emanuelcontinib/"},
            {name:"Linkedin", url: "https://www.linkedin.com/in/emanuel-contini-bertol-12bbb4164/"},
            {name:"Spotify", url: "https://open.spotify.com/user/12149389009"},
        ]
    }

    return res.render("about", {about})  //renderizar a página index
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio" , {items: videos})  //renderizar a página classes
})

server.listen(5000, function () { //porta e depois a função//
    console.log("server ok")
})  