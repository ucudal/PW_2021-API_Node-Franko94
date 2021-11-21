const empresa = [{
  empresa: "Globant",
  puesto: "dev",
  descripcion: "cosas de globant",
  fechaInicio: new Date("2019-11-03"),
  fechaFin: new Date("2020-11-03"),
},
{
  empresa: "Porto",
  puesto: "dev",
  descripcion: "cosas de porto",
  fechaInicio: new Date("2019-11-03"),
  fechaFin: new Date("2020-11-03"),
}
]



var express = require('express');
const cors = require('cors')

var app = express();


app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get('/globant', function(req, res) {
  empresa.forEach(element => {
    if(element.empresa === "Globant"){
      res.send(element)
    }

  });
  res.send("No se encontro datos de la empresa")
});

app.get('/porto', function(req, res) {
  empresa.forEach(element => {
    if(element.empresa === "Porto"){
      res.send(element)
    }

  });
  res.send("No se encontro datos de la empresa")
});

app.post('/contacto',function(req,res){
  res.send(req.query.nombreContacto)
  res.cookie("PW_2021-CV_Contacto", req.query.nombreContactoa, {
    httpOnly: true,
  });
});

app.listen(process.env.PORT || 8080, (a) => {
  console.log("Servidor disponible en http://localhost:3001")
});
 
module.exports = app;