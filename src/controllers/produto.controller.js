const Produto = require ('../models/product.model.js');

module.exports = {
    async index(req, res) {
        const product = await Produto.find();
        res.json(product);
    },
    async createProduto(req, res) {
        const {nome_produto, cnpj_fornecedor} = req.body;

        if (cnpj_fornecedor.length < 14) {
            return res.status(400).send({
                message: 'CNPJ Inválido'
            })
        } else { 
            let data = {};

            let product = await Produto.findOne({cnpj_fornecedor})
            if (!product) {
                data = {nome_produto, cnpj_fornecedor}
                product = await Produto.create(data);
                return res.status(200).json(product);
            } else {
                return res.status(500).json(product);
            }
        }

    }, 
    async details(req, res) {
        const { _id } = req.params;

        const product = await Produto.findById({_id});

        return res.json(product);
    }, 
    async delete(req, res) {
        const { _id } = req.params;

        const product = await Produto.findByIdAndDelete({_id});

        return res.json(product);
    },
    async update(req, res) {
        const { _id, nome_produto, cnpj_fornecedor } = req.body;

        if (cnpj_fornecedor.length < 14 ) {
            return res.status(400).send({
                message: 'CNPJ Inválido'
            })
        } else {

            const data = {nome_produto, cnpj_fornecedor}
    
            const product = await Produto.findByIdAndUpdate({_id}, data, {new:true});
    
            res.json(product);
        }

    }
}