const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   category: {
       type: Schema.Types.ObjectId,
       ref: 'Category',
       required: true,
   },
    title: {
       type: String,
        required: true,
    },
    price: {
       type: Number,
        required: true,
    },
    description: {
       type: String,
        required: true
    },
    imgUrl: {
       type: String,
    }
})

const model = mongoose.model('Product', ProductSchema);
module.exports = model;