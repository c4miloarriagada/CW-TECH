const { Router } = require('express');
const { check } = require('express-validator');

const postText = require('../controllers/postText');


const router = Router();


router.post('/',check('text', 'Text is required').not().isEmpty(), postText);


module.exports = router;
