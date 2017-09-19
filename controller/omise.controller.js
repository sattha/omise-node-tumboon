'use strict';
const omise = require('omise');

exports.omise = omise({
    'secretKey': process.env.OMISE_SKEY,
    'omiseVersion': '2015-11-17'
});