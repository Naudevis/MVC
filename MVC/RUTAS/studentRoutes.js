const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

//hace que cuando escriba http://localhost:puerto/
//me retorne la lista de estudiantes creados
router.get("/", studentController.getAllStudents);

//Con este me permite poder crear estudiantes
//pero los parámetros debo enviarlos por el body
router.post("/add", studentController.createStudent);


router.post("/remove", studentController.removeStudentById);

router.post("/find", studentController.findStudentById);

module.exports = router;
