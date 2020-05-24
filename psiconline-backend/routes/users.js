const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

var usersSchema = new Schema(
  {
    //construyo el esquema de Turno
    _id: ObjectId,
    // imagen: { type: String, require: true, uppercase: true, trim: true },
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    fechaNacimiento: { type: String, require: true },
    email: { type: String, require: true },
    sexo: { type: String, require: true },
    password: { type: String, required: true },
    newsLetter: { type: Boolean, defaultStatus: false},
  },
  { timestamps: true }
);

const UsersModel = mongoose.model("users", usersSchema); //'blogarticles' es el nombre de la coleccion que guarda los documentos creados

router.get("/", async (req, res) => {
  //devuelve listado completo
  try {
    const users = await UsersModel.find(); //al no pasarle parametros al find, me devuelve todo lo que esta despues de la "/"
    res.json({
      mensaje: "Usuarios registrados",
      users,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.get("/:idUser", async (req, res) => {
  try {
    const id = req.params.idUser;
    const user = await UsersModel.findById(id); //UsersModel.find({categoria: categoria}) //puedo usar un find y pasarle un parametro de busqueda. Por ejemplo por categoria
    res.json({
      mensaje: "Usuario:",
      user,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.post("/", async (req, res) => {
  //crea un articulo nuevo
  const newUser = new UsersModel({
    //instancia de la clase TurnoModel
    _id: new ObjectId(),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fechaNacimiento: req.body.fechaNacimiento,
    sexo: req.body.sexo,
    email: req.body.email,
    password: req.body.password,
    newsLetter: req.body.newsLetter,
  });
  try {
    const user = await newUser.save();
    res.json({ mensaje: "Ya estas registrado!", user: user });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});
// nuevoTurno
//     .save()
//     .then(response => {
//         res.json({ mensaje: 'Turno agregado con exito: ', turno: response });
//     })
//     .catch(err => {
//         res.status(500).json({ mensaje: 'Error: ', tipo: err });
//     });

router.put("/:idUser", async (req, res) => {
  try {
    id = req.params.idUser;
    modifiedUser = req.body;
    const user = await UsersModel.findByIdAndUpdate(id, modifiedUser);
    res.json({
      mensaje: "Usuario modificado con exito: ",
      user,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.delete("/:idUser", async (req, res) => {
  try {
    const id = req.params.idUser;
    await UsersModel.findByIdAndRemove(id); //aqui lo borro segun id
    const users = await UsersModel.find(); //aqui listo de nuevo los que quedaron
    res.json({
      mensaje: "Usuario borrado con exito",
      users,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

module.exports = router;
