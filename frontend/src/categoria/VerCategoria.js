import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function VerCategoria() {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({
    name: ''
  });

  useEffect(() => {
    loadCategoria();
  }, []);

  const loadCategoria = async () => {
    const result = await axios.get(`http://localhost:8080/categorias/${id}`);
    setCategoria(result.data);
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>DETALHES CATEGORIA</h2>
          <div className='details-card'>
            <div className='card-header text-center'>
              Detalhes da categoria id: {id}
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Nome: </b>{categoria.name}
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <Link className='btn btn-primary my-2' to={"/categoria"}>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
