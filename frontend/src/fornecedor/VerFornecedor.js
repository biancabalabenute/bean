import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function VerFornecedor() {
  const { id } = useParams();
  const [fornecedor, setFornecedor] = useState({
    name: '',
    telefone: ''
  });

  useEffect(() => {
    loadFornecedor();
  }, []);

  const loadFornecedor = async () => {
    const result = await axios.get(`http://localhost:8080/fornecedores/${id}`);
    setFornecedor(result.data);
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>DETALHES FORNECEDOR</h2>
          <div className='details-card'>
            <div className='card-header text-center'>
              Detalhes do Fornecedor de id: {id}
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Nome: </b>{fornecedor.name}
              </li>
              <li className='list-group-item'>
                <b>Telefone: </b>{fornecedor.telefone}
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <Link className='btn btn-primary my-2' to={"/fornecedor"}>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
