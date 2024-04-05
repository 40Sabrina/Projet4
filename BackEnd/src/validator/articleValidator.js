const Joi = require("joi");

const validateArticle = (article) => {
  const result = Joi.object({
    reference: Joi.string().min(3).max(45).presence("required"),
    name: Joi.string().min(3).max(45).presence("required"),
    description: Joi.string().min(8).max(255).presence("required"),
    stock: Joi.number().presence("required"),
  })
    .required()
    .validate(article, { abortEarly: false }).error;

  if (result) {
    const errorMessage = result.details.map((error) => ({
      message: error.message,
    }));
    return {
      errorCount: result.details.length,
      errorMessage,
    };
  }
  return false;
};

module.exports = validateArticle;
