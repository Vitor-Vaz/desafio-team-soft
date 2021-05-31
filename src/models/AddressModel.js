const mongoose = require('../database');

const AddressSchema = new mongoose.Schema({

    log: {
        type: String,
        require: true
    },

    number: {
        type: String, // o numero nesse contexto é uma string visto que alguns endereços são indentificados não exclusivamente por numeros, ex: lote 7 ou quadra 10 e a api do google consegue pegar com esses indentificadores.
        require: true
    },

    log: {
        type: String,
        require: true
    },

    complement: {
        type: String
    },

    district: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true
    },

    state: {
        type: String,
        require: true
    },

    code: {
        type: String,
        require: true
    },

    lat: {
        type: String,
    },

    lng: {
        type: String,
    },

    status: {
        type: String
    }

    
})

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;


