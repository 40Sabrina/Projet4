const Joi = require("joi");

const validateUser = (user) => {
  const result = Joi.object({
    name: Joi.string().min(3).max(100).presence("required"),
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(8).max(42).presence("required"),
  })
    .required()
    .validate(user, { abortEarly: false }).error;

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

module.exports = validateUser;
