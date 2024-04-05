const db = require("./db");

// async function findAll() {
const findAll = async () => {
  try {
    const [articles] = await db.query("select * from article");
    return articles;
  } catch (error) {
    console.error(error);
  }
};

const findOne = async (id) => {
  try {
    const [article] = await db.query("select * from `article` where id = ?", [
      id,
    ]);
    return article;
  } catch (error) {
    console.error(error);
  }
};

const addOne = async (article) => {
  try {
    const { reference, name, description, stock } = article;
    const [result] = await db.query(
      "insert into `article` (reference, name, description, stock) values (?,?,?,?)",
      [reference, name, description, stock]
    );
    return { id: result.insertId, reference, name, description, stock };
  } catch (err) {
    console.log(err);
  }
};

const deleteArticle = async (id) => {
  try {
    const [article] = await db.query("DELETE from `article` where id = ?", [
      id,
    ]);
    return article;
  } catch (err) {
    console.log(err);
  }
};

const updateStock = async (id, newStock) => {
  try {
    const [result] = await db.query(
      "UPDATE article SET stock = ? WHERE id = ?",
      [newStock, id]
    );
    return result;
  } catch (error) {
    console.log(err);
  }
};

module.exports = { findAll, findOne, addOne, deleteArticle, updateStock };
