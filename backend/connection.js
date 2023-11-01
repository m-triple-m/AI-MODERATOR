const mongoose = require('mongoose');

const url = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/aimoderator?retryWrites=true&w=majority`
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;

// synchronous
// asynchronous