// routes/routeClientes.js
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');

router.post('/', ClienteController.create);
router.get('/', ClienteController.read);
router.get('/:id', ClienteController.getClient);
router.put('/:id', ClienteController.update);
router.delete('/:id', ClienteController.delete);

module.exports = router;
