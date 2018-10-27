const mongoose = require('mongoose')
require('../models/Item')
const Item = mongoose.model('Item')
mongoose.Promise = global.Promise;

exports.getItems = async (req, res) => {
    try {
        const itemsPromise = Item
        .find()
        .sort({ created: 'desc' })
        const countPromise = Item.countDocuments();

        const [items, count] = await Promise.all([itemsPromise, countPromise]);
        const body = {
            items,
            count
        }
        res.status(201).send(body)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

// Get Item by Slug
exports.getSingleItem = async (req, res, next) => {
    try {
        const item = await Item.findOne({ slug: req.params.id });
    
        //render 404 if no matching company found (not to display "someth went wrong")
        if (!item) {
          next();
          return;
        }

        res.status(201).send(item)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.createItem = async (req, res) => {
    try {
        const item = await (new Item(req.body)).save();
        res.status(201).send(item) 
    } catch(err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

// Get Item by ID
exports.editItem = async (req, res, next) => {
    try {
        const item = await Item.findOne({ _id: req.params.id });
    
        //render 404 if no matching company found (not to display "someth went wrong")
        if (!item) {
          next();
          return;
        }

        res.status(201).send(item)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err);
    }
}


exports.updateItem = async (req, res) => {
    try {
        req.body.location.type = 'Point';
        const item = await Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }).exec();
        res.status(201).send(item);
    } catch(err) {
        console.log(err)
        return res.status(500).json(err);
    }

}