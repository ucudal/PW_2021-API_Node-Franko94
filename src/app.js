<script type="module" src="./entities.js"></script>
import { empresa } from './entities';
var express = require('express');

var app = express();

app.get('/hola-mundo', function(req, res) {
  res.send(empresa)
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;