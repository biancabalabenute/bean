import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = async () => {
    try {
      const result = await axios.get("http://localhost:8080/categorias");
      setCategorias(result.data);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteCategoria = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/categorias/${id}`);
      setCategorias(categorias.filter(categoria => categoria.id !== id));
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
    }
  };

  const filteredCategorias = categorias.filter(categoria =>
    categoria.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Link to='/adicionarcategoria' className='add-button link-sem-sublinhado'>Adicionar</Link>
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
            {filteredCategorias.map((categoria, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{categoria.name}</td>
                <td>
                  <Link to={`/vercategoria/${categoria.id}`} className='btn btn-primary mx-2'>Ver</Link>
                  <Link to={`/editarcategoria/${categoria.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteCategoria(categoria.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
