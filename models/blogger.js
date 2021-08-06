const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const bloggerSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        about: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    });

module.exports = mongoose.model('Blogger', bloggerSchema)