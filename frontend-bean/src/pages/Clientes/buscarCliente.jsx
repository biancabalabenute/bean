import React, { useState } from 'react';
import axios from 'axios';
import './buscarCliente.css';

function BuscaCliente() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para buscar clientes
  const buscarClientes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`sua-api.com/clientes`, {
        params: {
          nome: busca
        }
      });
      setResultado(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class ="campo">
      <input id = "inpBuscar" style={{width:'600px', }}
        type="text"
        placeholder="Digite o nome do cliente"
        value={busca}
        onChange={e => setBusca(e.
          
          target.value)}
      />
      <button id="btn_buscar" onClick={buscarClientes} disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
      <button style={{width:'80px'}} id="btn_filtrar" onClick={buscarClientes} disabled={loading}>Filtrar
      </button>

      {resultado && resultado.length > 0 ? (
        <ul>
          {resultado.map(cliente => (
            <li key={cliente.id}>{cliente.nome}</li>
          ))}
        </ul>
      ) : (
        <p>{loading ? 'Buscando clientes...' : 'Nenhum cliente encontrado.'}</p>
      )}
    </div>
  );
}

export default BuscaCliente;

