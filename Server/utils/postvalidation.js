import Joi from 'joi';

export const postValidationSchema = Joi.object({
  caption: Joi.string().max(500).allow(''),
  imageUrl: Joi.string().uri().allow(''),
  musicUrl: Joi.string().uri().allow(''),
  musicTitle: Joi.string().max(100).allow(''),
  musicArtist: Joi.string().max(100).allow(''),
});
