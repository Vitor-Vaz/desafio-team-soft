const findLatLng = require('../utils/FindLatLng');
const verifyComplement = require('../utils/VerifyComplement');
const AddressModel = require('../models/AddressModel');
const { body, validationResult } = require('express-validator');

module.exports = {

    //pega todos os endereços
    async getAllAddresses(req, res) {

        const addresses = await AddressModel.find();

        res.send(addresses);

    },

    //pega apenas um endereço pelo id
    async getOneAddress(req, res) {

        const id = req.params.id;

        try {
            const address = await AddressModel.findById(id);
            res.send(address);

        } catch (error) {
            res.send("Não foi possivel encontrar o endereço, log do erro:" + error);
        }
    },

    //cria endereço
    createAddress: {
        // valida todos os campos
        validating: [
            body('log').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('number').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('district').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('city').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('state').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('state').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('code').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('code').isInt().withMessage("Esse campo deve ser apenas numeros"),
            body('code').isLength({min: 8}).withMessage("o cep está incompleto")
        ],

        //cria caso tudo esteja certo
        creating: async (req, res) => {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {

                const address = req.body;

                const newAddress = verifyComplement(address);

                const { number, log, city, state } = newAddress;

                const { lat, lng } = await findLatLng(number, log, city, state);

                const addressInput = {
                    ...newAddress,
                    lat,
                    lng
                }

                const data = await AddressModel.create(addressInput);

                res.send({ data });
            }

        }
    },

    //atualiza um endereço
    updateAddress: {
        //valida todos os campos
        validating: [
            body('log').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('number').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('district').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('city').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('state').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('code').notEmpty().withMessage("O preenchimento desse campo é obrigatório"),
            body('code').isInt().withMessage("Esse campo deve ser apenas numeros"),
            body('code').isLength({min: 8}).withMessage("o cep está incompleto")
        ],
        //faz a atualização caso tudo esteja ok
        updating: async (req, res) => {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {

                const id = req.params.id;

                const address = req.body;

                const newAddress = verifyComplement(address);

                const { number, log, city, state } = newAddress;

                const { lat, lng } = await findLatLng(number, log, city, state);

                const addressInput = {
                    ...newAddress,
                    lat,
                    lng
                }

                const data = await AddressModel.findByIdAndUpdate(id, {
                    ...addressInput
                }, { new: true }
                );
                res.send(data);

            }
        }
    },

    //deleta endereço
    async deleteAddress(req, res) {

        const id = req.params.id;

        try{
            await AddressModel.findByIdAndDelete(id);

            res.send("Endereço removido com sucesso");
        }catch(err){
            res.send(`Endereço foi encontrado! log do erro: ${err}`);
        }


    }

}