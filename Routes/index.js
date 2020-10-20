const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'GET raiz'});
});

module.exports = router;