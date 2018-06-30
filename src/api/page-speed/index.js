'use strict';

const express = require('express');
const router = express.Router();
const API_KEY = 'YOUR_API_KEY';
const request = require('request'); 


router.get('/', (req, res) => {
    const url = req.body.url; 
    request('https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=' + url + '&key=' + API_KEY, { json: true }, (err, response, body) => {
        if (err) {
            res.json({
                'status': 'error',
                'message': err
            })
        } else {
            if (body.error) {
                let errors = [];
                for (var i = 0, len = body.error.errors.length; i < len; ++i) {
                    if (body.error.errors[i].reason == 'keyInvalid') {
                        errors.push('Your API KEY IS Invalid.');
                    }
                    if (body.error.errors[i].reason == 'mainResourceRequestFailed') {
                        errors.push('Your API KEY IS Invalid.')
                    } else {
                        errors.push(body.error.errors);
                    }
                }
                res.json({
                    'status': 'error',
                    'errors': errors
                })
            } else {
                res.json({
                    'status': 'success',
                    'data': body
                })
            }
        }
    });
});

module.exports = router;