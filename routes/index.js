const express = require('express');

let router = express.Router();

router.use(async (req, res, next) => {
    const shop_address = req.headers.host.split('.', 1)[0];

    req.shop_address = shop_address;
    next();
});

router.get('/', (req, res) => {
    res.render("index.ejs", {
        user: req.shop_address
    });
});

module.exports = router