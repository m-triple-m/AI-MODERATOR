const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    name : String,
    rating: String,
    user: {type : Types.ObjectId, ref : 'users'},
    review: String,
    createdAt : Date
});

module.exports = model( 'review2', myschema );