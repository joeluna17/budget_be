require('dotenv').config();

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();

const AccountsRouter = require('./Routes/Accounts/AccountsRoute');

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(morgan());
server.use('/users', AccountsRouter);

server.get('/', (req, res) => {
    res.send(`<h1 style = "text-align: center;" >Welcome to the app!<h1>`);
});





module.exports = server;






