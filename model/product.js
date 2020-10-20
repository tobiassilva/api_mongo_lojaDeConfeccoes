const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    codigo: { type: Number, required: true, unique: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    desconto: { type: Number, required: true }
});

module.exports = mongoose.model('Products', ProductSchema);