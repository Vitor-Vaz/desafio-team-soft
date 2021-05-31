const express = require('express'); 
const routes = express.Router();
const ClientController = require('./controllers/ClientController')
const AddressController = require('./controllers/AddressController')


// rotas de clientes

routes.get('/client', ClientController.getAll);

routes.get('/client/:id', ClientController.getOne);

routes.post('/client', ClientController.createClient.validating, ClientController.createClient.creating);

routes.put('/client/:id', ClientController.updateClient.validating, ClientController.updateClient.updating);

routes.delete('/client/:id', ClientController.deleteClient);

// rotas de endereços

routes.get('/address', AddressController.getAllAddresses);

routes.get('/address/:id', AddressController.getOneAddress);

routes.post('/address', AddressController.createAddress.validating, AddressController.createAddress.creating);

routes.put('/address/:id', AddressController.updateAddress.validating, AddressController.updateAddress.updating);

routes.delete('/address/:id', AddressController.deleteAddress);



module.exports = routes;