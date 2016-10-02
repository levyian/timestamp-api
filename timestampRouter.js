'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var timestampRouter = express.Router();
timestampRouter.use(bodyParser.json());

timestampRouter.route('/')
    .get(function(req, res) {
        res.send("Api");
    });
    
module.exports = timestampRouter;