const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : { type : Types.ObjectId, ref : 'users' },
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    avatar: String,
    role : {type: String, default: 'user'},
    createdAt : Date
});

module.exports = model( 'products', myschema );