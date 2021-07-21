const Fornecedor = require ('../models/fornecedor.model.js');

module.exports = {
    async index(req, res) {
        const fornecedor = await Fornecedor.find();
        res.json(fornecedor);
    },
    async createFornecedor(req, res) {
        const {nome_fornecedor, cnpj_fornecedor} = req.body;
 

        if (cnpj_fornecedor.length < 14) {
            return res.status(400).send({
                message: 'CNPJ Inválido'
            })
        } else {

            let data = {};
    
            let fornecedor = await Fornecedor.findOne({cnpj_fornecedor})
            if (!fornecedor) {
                data = {nome_fornecedor, cnpj_fornecedor}
                fornecedor = await Fornecedor.create(data);
                return res.status(200).json(fornecedor);
            } else {
                return res.status(500).json(fornecedor);
            }
        }

    }, 
    async details(req, res) {
        const { _id } = req.params;

        const fornecedor = await Fornecedor.findById({_id});

        return res.json(fornecedor);
    }, 
    async delete(req, res) {
        const { _id } = req.params;

        const fornecedor = await Fornecedor.findByIdAndDelete({_id});

        return res.json(fornecedor);
    },
    async update(req, res) {
        const { _id, nome_fornecedor, cnpj_fornecedor } = req.body;

        if (cnpj_fornecedor.length < 14 ) {
            return res.status(400).send({
                message: 'CNPJ Inválido'
            });
        } else {

            const data = {nome_fornecedor, cnpj_fornecedor}
    
            const fornecedor = await Fornecedor.findByIdAndUpdate({_id}, data, {new:true});
                
            res.json(fornecedor);
        }
    }
}