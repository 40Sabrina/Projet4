const {
  findAll,
  findOne,
  addOne,
  deleteArticle,
  updateStock,
} = require("../model/articleModel");
const validateArticle = require("../validator/articleValidator");

const getAll = async (req, res) => {
  try {
    const articles = await findAll();
    res.json(articles);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const articleId = parseInt(req.params.id);
  console.log(articleId);
  try {
    if (isNaN(articleId)) {
      throw new Error();
    }
    const [article] = await findOne(articleId);
    res.json(article);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  try {
    console.log("je suis dans create one");
    const errors = validateArticle(req.body);
    if (errors) {
      return res.status(401).send(errors);
    }
    const result = await addOne(req.body);
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
  }
};

const deleteOne = async (req, res) => {
  try {
    const article = await deleteArticle(req.params.id);
    if (article === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updateArticleStock = async (req, res) => {
  const articleId = req.params.id;
  const newStock = req.body.stock;
  try {
    const result = await updateStock(articleId, newStock);
    if (result) {
      res.sendStatus(200); // Envoyer un code 200 pour indiquer que la mise à jour a réussi
    } else {
      res.sendStatus(404); // Envoyer un code 404 si la mise à jour a échoué
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = { getAll, getOne, createOne, deleteOne, updateArticleStock };
