const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/itemsController')


router.get('/', itemsController.getItems);
router.get('/add', itemsController.addItem);
router.post('/create', itemsController.createItem);


module.exports = router;