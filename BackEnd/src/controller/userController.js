const { findOne, addOne } = require("../model/userModel");
const validateUser = require("../validator/userValidator");
const { hashPassword } = require("../helper/argonHelper");

const getOne = async (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(userId);
  try {
    if (isNaN(userId)) {
      throw new Error();
    }
    const [user] = await findOne(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  try {
    console.log("je suis dans create one");
    // const { name, email, password } = req.body;
    const errors = validateUser(req.body);
    if (errors) {
      return res.status(401).send(errors);
    }
    const hashedPassword = await hashPassword(req.body.password);
    const result = await addOne({ ...req.body, password: hashedPassword });
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getOne, createOne };
