const mongoose = require('mongoose');

const FornecedorSchema = new mongoose.Schema({
    nome_fornecedor: { type: String },
    cnpj_fornecedor: { 
        type: Number,
        min: 14
    }
}, { collection: 'fornecedor' });




const fornecedor = mongoose.model('Fornecedor', FornecedorSchema);
module.exports = fornecedor;