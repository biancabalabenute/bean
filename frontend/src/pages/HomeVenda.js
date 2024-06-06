import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeVenda() {
  const [vendas, setVendas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadVendas();
  }, []);

  const loadVendas = async () => {
    try {
      const result = await axios.get("http://localhost:8080/pedidos");
      setVendas(result.data);
    } catch (error) {
      console.error("Erro ao carregar vendas:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteVenda = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pedidos/${id}`);
      setVendas(vendas.filter(venda => venda.id !== id));
    } catch (error) {
      console.error("Erro ao excluir venda:", error);
    }
  };

  const filteredVendas = vendas.filter(venda =>
    venda && venda.itens.some(item => item.produto && item.produto.name && item.produto.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  return (
    <div className='main-content'>
      <div className='main-header'>
        <label htmlFor="search-bar" className='label-negrito'>Pesquisar</label>
        <input
          id="search-bar"
          type='text'
          className='search-bar'
          placeholder='Busque aqui...'
          value={searchTerm}
          onChange={handleSearch}
        />
        <Link to='/adicionarvenda' className='add-button link-sem-sublinhado'>Adicionar</Link>
      </div>
      <div className='py-4'>
        <table className='table shadow table-hover'>
          <thead>
            <tr>
              <th style={{ width: '10%' }} scope='col'>#</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendas.map((venda, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{venda.itens[0].produto.name}</td>
                <td>
                  <Link to={`/vervenda/${venda.id}`} className='btn btn-primary mx-2'>Ver</Link>
                  <Link to={`/editarvenda/${venda.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteVenda(venda.id)}>Deletar</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
