import validate from "react-joi-validation";
import { Joi } from "react-joi-validation";

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(3).max(15).required(),
    apellido: Joi.string().required(),
    mail: Joi.string().email().required(),
    password: Joi.string().min(8).max(15).required(),
    direccionEnvio: {
      direccion: Joi.string().required(),
      ciudad: Joi.string().required(),
      provincia: Joi.string().required(),
      cp: Joi.number().min(4).required(),
    },
  }),
  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(3).max(15).optional(),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().optional(),
    password: Joi.string().min(8).max(15).optional(),
    direccionEnvio: {
      direccion: Joi.string().optional(),
      ciudad: Joi.string().optional(),
      provincia: Joi.string().optional(),
      cp: Joi.number().min(4).optional(),
    },
  }),
};
const validationOptions = {
  joiSchema: schemas,
  only: "usuario",
};

validate(registro, validationOptions);
export default { schemas };
