const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './blogimg')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname)
  }
})
 

const upload = multer({ storage: storage })

var ArticleSchema = new Schema(
  {
    //construyo el esquema de BlogPost
    _id: ObjectId,
    imagen: {type: String},
    titulo: { type: String, require: true},
    subtitulo: {type: String, require: true },
    categoria: { type: String, require: true },
    contenido: { type: String, require: true },
    autor: {type: String, required: true, trim: true},
    createdAt: {type: Date},
    views: {type: Number},
    counter: {type: Number}
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("articles", ArticleSchema); //'blogarticles' es el nombre de la coleccion que guarda los documentos creados


const getArticle = async (req, res) => {
  try {
    const id = req.params.idArticle;
    const respuesta = await ArticleModel.findById(id); 
    res.json({
      mensaje: "Articulo filtrado: ",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
 };

 const getArticleByCategoria = async (req, res) => {
  try {
    const categoria = req.body.categoria;
    const respuesta = await ArticleModel.find({categoria:categoria});  //filtra por categoria
    res.json({
      mensaje: "Articulos filtrado: ",
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
 };

 

router.get("/:idArticle", getArticle);
router.get("/:categoria", getArticleByCategoria);


module.exports = router;
