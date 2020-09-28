const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/', (req, res) => {
    res.render('index', { myData });
});
router.get('/skill', (req, res) => {
    res.render('skill');
});
router.get('/workexperience', (req, res) => {
    res.send("<h1>My Work</h1>");
});

module.exports = router;