const Cliente = require('../models/cliente');

class ClienteService {

  static async createClient(data) {
    try {
      const newClient = await Cliente.create(data);

      return newClient;
    } catch (error) {
      throw new Error(`Erro ao criar o cliente. ${error.message}`);
    }
  }

  static async getClient(id) {
    try {
      const client = await Cliente.findByPk(id);

      if (!client) {
        throw new Error(`Cliente com id ${id} não encontrado.`);
      }

      return client;
    } catch (error) {
      throw new Error(`Erro ao encontrar o cliente. ${error.message}`);
    }
  }

  static async ShowClients() {
    try {
      const clients = await Cliente.findAll();

      return clients;
    } catch (error) {
      throw new Error(`Erro ao buscar os clientes. ${error.message}`);
    }
  }

  static async updateClient(id, data) {
    try {
      const client = await Cliente.findByPk(id);

      if (!client) {
        throw new Error(`Cliente com id ${id} não encontrado.`);
      }

      const updatedClient = await client.update(data);

      return updatedClient;
    } catch (error) {
      throw new Error(`Erro ao atualizar o cliente. ${error.message}`);
    }
  }

  static async deleteClient(id) {
    try {
      const client = await Cliente.findByPk(id);
      
      if (!client) {
        throw new Error(`Cliente com id ${id} não encontrado.`);
      }

      await client.destroy();
      
      return { message: `Cliente com id ${id} deletado com sucesso!` };
    } catch (error) {
      throw new Error(`Erro ao deletar o cliente. ${error.message}`);
    }
  }

}

module.exports = ClienteService;
