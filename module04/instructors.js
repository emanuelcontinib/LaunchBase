const fs = require('fs')
const data = require('./data.json')
//POST//
exports.post = function (req, res) {

  const keys = Object.keys(req.body)
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("please, fill all fields")
    }
  }
  let  {avatar_url, birth, name, services, gender} = req.body
  
  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)


  data.instructors.push({
    avatar_url,
    birth,
    created_at,
    gender,
    services,
    name,
    id
  })//

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send ("Write file error!")

    return res.redirect("/instructors")
  })
}

//UPDATE

//DELETE