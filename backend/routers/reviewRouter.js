const Model = require('../models/reviewModel');
const {Router} = require('express');
const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    // res.send('Response from User Router');

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});



router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});


router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req,res) => {
    Model.findByIdAndUpdate(req.params.id , req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
}); 


module.exports = router;