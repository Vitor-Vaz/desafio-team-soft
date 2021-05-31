const mongoose = require('../database');

const ClientSchema = new mongoose.Schema({

    nameContact: {
        type: String,
        require: true
    },

    cnpj: {
        type: Number,
        unique: true,
        require: true
    },

    socialName: {
        type: String,
        require: true
    },

    contactNumber: {
        type: Number,
        require: true
    }


})

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;


