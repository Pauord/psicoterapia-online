const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

var blogArticleSchema = new Schema(
  {
    //construyo el esquema de Turno
    _id: ObjectId,
    // imagen: { type: String, require: true, uppercase: true, trim: true },
    titulo: { type: String, require: true, trim: true },
    categoria: { type: String, require: true },
    texto: { type: String, require: true },
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("blogArticles", blogArticleSchema); //'blogarticles' es el nombre de la coleccion que guarda los documentos creados

router.get("/", async (req, res) => {
  //devuelve listado completo
  try {
    const respuesta = await ArticleModel.find().sort({createdAt:"desc"}); //al no pasarle parametros al find, me devuelve todo lo que esta despues de la "/"
    res.json({
      mensaje: "listado de articulos: ",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.get("/:idArticle", async (req, res) => {
  try {
    const id = req.params.idArticle;
    const respuesta = await ArticleModel.findById(id); //ArticleModel.find({categoria: categoria}) //puedo usar un find y pasarle un parametro de busqueda. Por ejemplo por categoria
    res.json({
      mensaje: "Articulo filtrado: ",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.post("/", async (req, res) => {
  //crea un articulo nuevo
  const newArticle = new ArticleModel({
    //instancia de la clase TurnoModel
    _id: new ObjectId(),
    titulo: req.body.titulo,
    categoria: req.body.categoria,
    texto: req.body.texto,
  });
  try {
    const respuesta = await newArticle.save();
    res.json({ mensaje: "Articulo agregado con exito! ", articles: respuesta });
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

router.put("/:idArticle", async (req, res) => {
  try {
    id = req.params.idArticle;
    modifiedArticle = req.body;
    const respuesta = await ArticleModel.findByIdAndUpdate(id, modifiedArticle);
    res.json({
      mensaje: "Articulo modificado con exito: ",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

router.delete("/:idArticle", async (req, res) => {
  try {
   const id = req.params.idArticle;
    await ArticleModel.findByIdAndRemove(id);
    const articles = await ArticleModel.find().sort({createdAt:"desc"}); 
    res.json({
      mensaje: "Articulo borrado con exito",
      articles,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
});

module.exports = router;
