const express = require('express');

const postsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
    res.send('Server is running');
});

const port = 5000
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});