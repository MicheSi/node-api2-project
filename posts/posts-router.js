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

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Posts.findById(id)
    .then(post => {
        if (!post) {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        } else {
            res.status(200).json(post)
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
})

// router.post('/', (req, res) => {
//     const postInfo = req.body;

//     if (!postInfo.title || !postInfo.contents) {
//         res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
//     } else {
//         Posts.insert(postInfo)
//         .then(post => {
//             res.status(201).json(post);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: "There was an error while saving the post to the database" });
//         });
//     }
// })

module.exports = router;