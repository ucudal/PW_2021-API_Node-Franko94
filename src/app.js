const empresa = [{
  nombre: "Globant",
  descripcion: "cosas de globant"
},
{
  nombre: "Porto",
  descripcion: "cosas de porto"
}
]


var express = require('express');

var app = express();

app.get('/globant', function(req, res) {
  empresa.forEach(element => {
    if(element.nombre === "Globant"){
      res.send(element)
    }

  });
  res.send("No se encontro datos de la empresa")
});

app.get('/porto', function(req, res) {
  empresa.forEach(element => {
    if(element.nombre === "Porto"){
      res.send(element)
    }

  });
  res.send("No se encontro datos de la empresa")
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;