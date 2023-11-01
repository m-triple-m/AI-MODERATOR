const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    text : String,
    toxicity: Array,
    plugin: String,
    user: {type : Types.ObjectId, ref : 'users'},
    status: String,
    createdAt : Date
});

module.exports = model( 'analysis2', myschema );