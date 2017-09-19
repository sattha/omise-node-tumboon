'use strict';
const {Router} = require('express');
const {check, validationResult} = require('express-validator/check');
const {matchedData} = require('express-validator/filter');
const {omise} = require('../controller/omise.controller');

const router = Router();

/**
 * POST: To charge customer for donating to charity
 *
 * @param name the customer name
 * @param token the omise token, for charging credit card
 * @param amount the amount, to charge credit card
 */
router.post('/',
    [
        check('name').exists().withMessage('name is required'),
        check('token').exists().withMessage('token is required'),
        check('amount').exists().withMessage('amount is required'),
    ],
    function (req, res, next) {

        // Get the validation result whenever you want
        const errors = validationResult(req);

        // return error 422 (Unprocessable) for missing parameter
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.mapped()});
        }

        // retrieve model of data validated by the middleware
        const user = matchedData(req);

        // call Omise api for charging user
        omise.charges.create({
            'description': `Charge for user: ${user.name}`,
            'amount': user.amount, // 1,000 Baht
            'currency': 'thb',
            'capture': true,
            'card': user.token
        }, function (err, resp) {
            if (err) {
                //Error
                res.status(422).json(err);
            } else if (resp.paid) {
                //Success
                res.json(resp);
            } else {
                // response
                res.status(422).json(resp.failure_code);
            }
        });
    });

module.exports = router;
