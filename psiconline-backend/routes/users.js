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
    nombre: { type: String, require: true, trim: true },
    apellido: { type: String, require: true },
    fechaNacimiento: {type: String, require: true},
    email: { type: String, require: true },
    password: {type: String, required: true},
    newsLetter: {type: Boolean}
  },
  { timestamps: true }
);

const UsersModel = mongoose.model("users", usersSchema); //'blogarticles' es el nombre de la coleccion que guarda los documentos creados

router.get("/", async (req, res) => {
  //devuelve listado completo
  try {
    const respuesta = await UsersModel.find().sort({createdAt:"desc"}); //al no pasarle parametros al find, me devuelve todo lo que esta despues de la "/"
    res.json({
      mensaje: "Usuarios registrados",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.get("/:idUser", async (req, res) => {
  try {
    const id = req.params.idUser;
    const respuesta = await UsersModel.findById(id); //UsersModel.find({categoria: categoria}) //puedo usar un find y pasarle un parametro de busqueda. Por ejemplo por categoria
    res.json({
      mensaje: "Usuario:",
      respuesta,
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
    email: req.body.email,
    password: req.body.password,
    newsLetter: req.body.newsLetter
  });
  try {
    const respuesta = await newUser.save();
    res.json({ mensaje: "Ya estas registrado!", usuario: respuesta });
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
    modifiedUser= req.body;
    const respuesta = await UsersModel.findByIdAndUpdate(id, modifiedUser);
    res.json({
      mensaje: "Usuario modificado con exito: ",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.delete("/:idUser", async (req, res) => {
  try {
   const id = req.params.idUser;
    await UsersModel.findByIdAndRemove(id); //aqui lo borro segun id
    const usuarios = await UsersModel.find(); //aqui listo de nuevo los que quedaron
    res.json({
      mensaje: "Usuario borrado con exito",
      usuarios,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

module.exports = router;
