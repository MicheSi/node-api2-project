const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "The posts information could not be retrieved." });
    });
});

router.post('/', (req, res) => {
    
    Posts.add(req.body)
    .then(post => {
        res.status(201).json(post);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Unable to add post' });
    });
})

module.exports = router;