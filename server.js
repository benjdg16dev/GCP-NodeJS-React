const bodyParser = require('body-parser');

// Express
const express = require('express');

const server = express();
// Set up port if environment variables haven't been set
const port = process.env.PORT || 4041;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/', require('./routes/users'));

server.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});