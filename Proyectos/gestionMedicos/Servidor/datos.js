var centros = [
    { "id": 1, "nombre": "Eibar" },
    { "id": 2, "nombre": "Donostia" },
    { "id": 3, "nombre": "Irun" }
];
var especialidades = [
    { "id": 1, "nombre": "Otorrino" },
    { "id": 2, "nombre": "Cirugía" },
    { "id": 3, "nombre": "Dermatologia" }
];

var medicos = [
    {
        "id": 1,
        "nombre": "Fernando",
        "apellidos": "Diaz",
        "login": "pepito",
        "password": "1234",
        "especialidad": 0,
        "centro": 1
    },
    {
        "id": 2,
        "nombre": "Fermin",
        "apellidos": "Bustamante",
        "login": "Federico",
        "password": "1234",
        "especialidad": 1,
        "centro": 1
    }
]
var expedientes = [
    {
        "id": 1,
        "map": 1,
        "me": 1,
        "especialidad": 2,
        "sip": 2,
        "nombre": "Aimar",
        "apellidos": "Alonso Toledano",
        "fecha_nacimiento": "23/03/2000",
        "genero": "H",
        "observaciones": "Fiebre",
        "solicitud": "Alta",
        "respuesta": "Concedida",
        "fecha_creacion": "19/05/2024-13:30",
        "fecha_asignacion": "19/05/2024-13:40",
        "fecha_resolucion": "19/05/2024-14:30"
    }
]

module.exports.especialidades = especialidades;
module.exports.centros = centros;
module.exports.medicos=medicos;