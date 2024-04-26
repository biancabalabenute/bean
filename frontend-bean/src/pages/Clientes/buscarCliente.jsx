import React, { useState } from 'react';
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
      // colocar a URL da  API para buscar clientes
      const response = await fetch(`sua-api.com/clientes?nome=${busca}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar clientes');
      }
      const data = await response.json();
      setResultado(data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class ="campo" >
      <input id = "inpBuscar"style={{width:'600px',  }}
        type="text"
        placeholder="Digite o nome do cliente"
        value={busca}
        onChange={e => setBusca(e.target.value)}
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
