'use strict';

const path = require('path');

const routes = (app) => {
    app.use('/api/v1/page-speed', require('./api/page-speed'));

    app.get('/', function(req, res) {
        res.render('pages/home', {
            title: 'Google Page Speed Insights API Node.js',
            page: 'home',
            description: 'With this sample repo you will learn how to work with Google PageSpeed Insights API Node.JS'
        });
    });
}
module.exports = routes;