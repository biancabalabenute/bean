import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdicionarFornecedor() {
  let navigate = useNavigate();

  const [fornecedor, setFornecedor] = useState({
    name: "",
    telefone: ""
  });

  const { name, telefone } = fornecedor;

  const onInputChange = (e) => {
    setFornecedor({ ...fornecedor, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/fornecedores", fornecedor);
    navigate("/fornecedor");
  }

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>CADASTRO FORNECEDOR</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label bold-text'>
                Nome
              </label>
              <input
                id="inputName"
                type={"text"}
                className='form-control'
                placeholder="Entre com o nome"
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Telefone' className='form-label bold-text'>
                Telefone
              </label>
              <input
                id="inputName"
                type={"text"}
                className='form-control'
                placeholder="Entre com o telefone"
                name='telefone'
                value={telefone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/fornecedor'>
                CANCELAR
              </Link>
              <button type='submit' className='btn btn-primary'>
                CADASTRAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}