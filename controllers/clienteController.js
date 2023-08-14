const ClienteService = require('../services/clienteService');

class ClienteController {

  static async create(req, res) {
    try {
      const { cliente, email, cidade } = req.query;
      const newClient = await ClienteService.createClient({ cliente, email, cidade });

      return res.status(201).json({ status: 'success', data: newClient });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

  static async getClient(req, res) {
    try {
      const { id } = req.params;
      const client = await ClienteService.getClient(id);

      return res.json({ status: 'success', data: client });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

  static async read(req, res) {
    try {
      const clients = await ClienteService.ShowClients();

      return res.json({ status: 'success', data: clients });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { cliente, email, cidade } = req.query;
      const updatedClient = await ClienteService.updateClient(id, { cliente, email, cidade });

      return res.json({ status: 'success', data: updatedClient });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await ClienteService.deleteClient(id);
      
      return res.json({ status: 'success', data: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'error', data: error.message });
    }
  }
}

module.exports = ClienteController;
