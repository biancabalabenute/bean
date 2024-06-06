import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeProduto() {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProdutos();
  }, []);

  const loadProdutos = async () => {
    try {
      const result = await axios.get("http://localhost:8080/produtos");
      setProdutos(result.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteProduto = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/produtos/${id}`);
      setProdutos(produtos.filter(produto => produto.id !== id));
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  const filteredProdutos = produtos.filter(produto =>
    produto.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Link to='/estoque' className='estoque-button link-sem-sublinhado'>Estoque</Link>
        <Link to='/adicionarproduto' className='add-button link-sem-sublinhado'>Adicionar</Link>
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
            {filteredProdutos.map((produto, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{produto.name}</td>
                <td>
                  <Link to={`/verproduto/${produto.id}`} className='btn btn-primary mx-2'>Ver</Link>
                  <Link to={`/editarproduto/${produto.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteProduto(produto.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
