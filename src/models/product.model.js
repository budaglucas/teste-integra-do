const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nome_produto: { type: String },
    cnpj_fornecedor: { 
        type: Number,
        min: 14
    }
}, { collection: 'produto' });




const produto = mongoose.model('Product', ProductSchema);
module.exports = produto;