var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var datos = require('./datos.js');

const exp = require('constants');
var especialidades = datos.especialidades;
var centros = datos.centros;
var medicos = datos.medicos;
var expedientes = datos.expedientes;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/apiCliente", express.static("../cliente"));

app.get("/api/especialidades", function (req, res) {
    return res.status(200).json(especialidades);
});
app.get("/api/centros", function (req, res) {
    return res.status(200).json(centros);
});

app.post("/api/medico/login/", function (req, res) {
    var login = req.body.login;
    var password = req.body.password;
    var idMedico;
    var existemedico = false;
    for (var i = 0; i < medicos.length; i++) {
        if (medicos[i].login == login && medicos[i].password == password) {
            existemedico = true;
            idMedico = medicos[i].id;
            break;
        }
    }
    if (existemedico) {
        return res.status(200).json(idMedico); 
    } else {
        return res.status(403).json("Datos incorrectos");
    }
});

app.listen(3000, function () {
    console.log('Servidor escuchando en puerto 3000');
});
