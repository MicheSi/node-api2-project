const express = require('express');


const server = express();

server.get('/', (req, res) => {
    res.send('Server is running');
});

const port = 5000
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});