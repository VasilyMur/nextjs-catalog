const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/itemsController')



//router.get('/add', itemsController.addItem);

router.get('/all', itemsController.getItems);
router.get('/all/:page', itemsController.getItems);

router.get('/clubs/:city', itemsController.getAllItemsCity);

router.get('/city/:city', itemsController.getItemsByCity);
router.get('/city/:city/:page', itemsController.getItemsByCity);

router.get('/single/:id', itemsController.getSingleItem);

router.post('/create', itemsController.createItem);

router.get('/edit/:id', itemsController.editItem);
router.post('/update/:id', itemsController.updateItem);


module.exports = router;