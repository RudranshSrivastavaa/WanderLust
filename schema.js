const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(), // Corrected typo from Joi.string().required to Joi.string().required()
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0), // Changed from Joi.string() to Joi.number() assuming price is a number
        image: Joi.string().allow("", null)
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(), // Corrected typo from Joi.String().required() to Joi.string().required()
    }).required(),
});
