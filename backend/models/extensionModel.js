const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : { type : Types.ObjectId, ref : 'users' },
    title : {type: String, required: true},
    icon: String,
    features: Array,
    itemsToInclude: Array,
    createdAt : Date
});

module.exports = model( 'extensions', myschema );