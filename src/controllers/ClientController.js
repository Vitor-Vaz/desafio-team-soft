const Client = require('../models/ClientModel');
const { body, validationResult } = require('express-validator');

module.exports = {

    //pega todos os clientes
    async getAll(req, res) {

        const clients = await Client.find();

        res.send(clients);
    },

    //pega apenas um cliente
    async getOne(req, res) {

        const id = req.params.id;

        try {
            const client = await Client.findById(id);
            res.send(client)
        } catch (error) {
            res.send("Não foi possivel encontrar o usuario, log do erro:" + error);
        }



    },

    //cria cliente
    createClient: {
        //valida os campos inseridos
        validating: [

            body('nameContact').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('cnpj').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('cnpj').isInt().withMessage("CNPJ deve ser apenas numeros"),
            body('cnpj').isLength({min: 15}).withMessage("O CPNJ está muito curto!"),
            body('socialName').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('contactNumber').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('contactNumber').isInt().withMessage("Esse campo deve ser apenas numeros"),
            body('contactNumber').isLength({min: 11}).withMessage("Coloque o numero com ddd e o digito 9")
        ],

        //criando caso tudo esteja ok
        creating: async (req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {

                const client = await Client.create(req.body);

                res.send({ client });
            }


        }


    },

    //atualiza um cliente
    updateClient: {
        //valida os campos inseridos
        validating: [

            body('nameContact').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('cnpj').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('cnpj').isInt().withMessage("CNPJ deve ser apenas numeros"),
            body('cnpj').isLength({min: 15}).withMessage("O CPNJ está muito curto!"),
            body('socialName').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('contactNumber').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('contactNumber').isInt().withMessage("Esse campo deve ser apenas numeros"),
            body('contactNumber').isLength({min: 11}).withMessage("Coloque o numero com ddd e o digito 9")
        ],
        //caso esteja ok, faz a atualização
        updating: async (req, res) => {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {

                const id = req.params.id;
                const client = req.body;

                const newClient = await Client.findByIdAndUpdate(id, {
                    ...client,
                }, { new: true }
                );

                res.send(newClient);

            }
        }
    },

    //deleta o cliente
    async deleteClient(req, res) {

        const id = req.params.id;

        try {
            await Client.findByIdAndDelete(id);

            res.send("Cliente removido com sucesso");
        } catch (error) {
            res.send("Não foi possivel encontrar o usuario, log do erro: " + error);
        }
    },



}

