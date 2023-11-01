const { Types } = require('mongoose');
const {Schema, model} = require('../connection');

const myschema = new Schema({
    pluginCounts: Number,
    extentionCounts: Number,
    user : { type : Types.ObjectId, ref : 'users' },
});

module.exports = model( 'count', myschema );