const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    comment : String,
    name: String,
    user: {type : Types.ObjectId, ref : 'users'},
    reply: [{type : String, ref : 'comment'}],
    upvotes: {type: Number, default: 0},
    createdAt : Date
});

module.exports = model( 'comment2', myschema );