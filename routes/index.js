'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(
        [
            {
                "id": 0,
                "name": "Ban Khru Noi",
                "logo_url": "http://rkdretailiq.com/news/img-corporate-baankrunoi.jpg"
            },
            {
                "id": 1,
                "name": "Habitat for Humanity Thailand",
                "logo_url": "http://www.adamandlianne.com/uploads/2/2/1/6/2216267/3231127.gif"
            },
            {
                "id": 2,
                "name": "Paper Ranger",
                "logo_url": "https://myfreezer.files.wordpress.com/2007/06/paperranger.jpg"
            },
            {
                "id": 3,
                "name": "Makhampom",
                "logo_url": "http://www.makhampom.net/makhampom/ppcms/uploads/UserFiles/Image/Thai/T14Publice/2554/January/Newyear/logoweb.jpg"
            }
        ]
    );
});

module.exports = router;