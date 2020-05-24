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

var blogArticleSchema = new Schema(
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
    views: {Number},
    counter: {type: Number}
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("blogArticles", blogArticleSchema); //'blogarticles' es el nombre de la coleccion que guarda los documentos creados



const getArticles = async (req, res) => {
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
};

const getArticle = async (req, res) => {
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

 const postArticle = async (req, res) => {
   //crea un articulo nuevo
   const urlImagen = "http://localhost:3000/imagenes/" + req.file.filename
  const newArticle = new ArticleModel({
    //instancia de la clase TurnoModel
    imagen: urlImagen,
    _id: new ObjectId(),
    titulo: req.body.titulo,
    subtitulo: req.body.subtitulo,
    categoria: req.body.categoria,
    contenido: req.body.contenido,
    autor: req.body.autor,
    counter: req.body.counter,
    views: req.body.views
  });
  try {
    const respuesta = await newArticle.save();
    res.json({ mensaje: "Articulo agregado con exito! ", articles: respuesta });
  } catch (error) {
    res.status(500).json({ mensaje: "Error: ", tipo: error });
  }
  // nuevoTurno
//     .save()
//     .then(response => {
//         res.json({ mensaje: 'Turno agregado con exito: ', turno: response });
//     })
//     .catch(err => {
//         res.status(500).json({ mensaje: 'Error: ', tipo: err });
//     });
 }

 const putArticle = async (req, res) => {
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
 }

 const deleteArticle = async (req, res) =>{
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
 }



router.get("/", getArticles);
router.get("/:idArticle", getArticle);
router.get("/:categoria", getArticleByCategoria);
router.post("/", upload.single('imagen'), postArticle);
router.put("/:idArticle", putArticle);
router.delete("/:idArticle", deleteArticle);

module.exports = router;
