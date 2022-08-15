const express = require('express') //importer exppress
const app = express() //initiliser express dans la variable app

app.listen(7500,function() {
console.log("Servor start successully")
});

app.get('/iness',function(req, res)  {
    res.send('Salut le monde');
});

app.get('/login',function(req, res) {
    res.send('BIENVENUE A LA CONNEXION');
});