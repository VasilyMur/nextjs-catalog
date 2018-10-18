const mongoose = require('mongoose')
require('../models/Item')
const Item = mongoose.model('Item')
mongoose.Promise = global.Promise;

exports.getItems = async (req, res) => {
console.log('all items')
}

exports.addItem = async (req, res) => {
    console.log('add item')
}

exports.createItem = async (req, res) => {
    try {
        console.log(req.body) 
        const item = await (new Item(req.body)).save();
        res.status(201).send(item) 
    } catch(err) {
        console.log(err)
    }

}