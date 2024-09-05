const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const studentRoutes = require("./rutas/studentRoutes");

app.set("view engine", "ejs");
//permite extraer datos complejos como arreglos, jsons, etc
app.use(bodyParser.urlencoded({extended: true}));

app.use("/students", studentRoutes);



//renderiza el archivo index.ejs
app.get("/", (req, res) => {
    res.render("index");
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Servidor iniciado en el  puerto: "+PORT);
});