const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');


// FRONT PAGE
router.get('/all', itemsController.getItems);
router.get('/all/:page', itemsController.getItems);

// MAP - returns items with limited fields
router.get('/allcity/:city', itemsController.getAllItemsCity);

router.get('/city/:city', itemsController.getItemsByCity);
router.get('/city/:city/:page', itemsController.getItemsByCity);
// State Page
router.get('/state/:state', itemsController.getItemsByState);
 
router.get('/single/:id', itemsController.getSingleItem);

// AUTHCONTROLLER!!!
router.post('/create', authController.isLoggedIn, authController.isAdmin, itemsController.createItem);

router.get('/edit/:id', itemsController.editItem);
router.post('/update/:id', authController.isLoggedIn, authController.isAdmin, itemsController.updateItem);
 
// User Registration
router.post(`/register`, 
            userController.validateRegister,
            userController.register,
            authController.login
);

router.get('/logout', authController.logout);
router.post('/login', authController.login);



module.exports = router;