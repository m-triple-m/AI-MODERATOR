const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    feedback : {type: String, required: true},
});

module.exports = model( 'feedback', myschema );