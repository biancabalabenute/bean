import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeMarca() {
  const [marcas, setMarcas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadMarcas();
  }, []);

  const loadMarcas = async () => {
    try {
      const result = await axios.get("http://localhost:8080/marcas");
      setMarcas(result.data);
    } catch (error) {
      console.error("Erro ao carregar marcas:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteMarca = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/marcas/${id}`);
      setMarcas(marcas.filter(marca => marca.id !== id));
    } catch (error) {
      console.error("Erro ao excluir marca:", error);
    }
  };

  const filteredMarcas = marcas.filter(marca =>
    marca.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Link to='/adicionarmarca' className='add-button link-sem-sublinhado'>Adicionar</Link>
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
            {filteredMarcas.map((marca, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{marca.name}</td>
                <td>
                  <Link to={`/vermarca/${marca.id}`} className='btn btn-primary mx-2'>Ver</Link>
                  <Link to={`/editarmarca/${marca.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteMarca(marca.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
