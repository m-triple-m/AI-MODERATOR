const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    number : {type: Number},
    avatar: {type : String, default: 'placeholder.png'},
    numExt: {type : Number, default: 0},
    numPlugin: {type : Number, default: 0},
    role : {type: String, default: 'user'},
    createdAt : Date
});

module.exports = model( 'users', myschema );