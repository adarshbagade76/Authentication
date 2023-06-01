const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    }
})