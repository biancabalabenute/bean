import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdicionarCliente() {
  let navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nome: "",
    data: "",
    endereco: "",
    bairro: "",
    numero: "",
    complemento: "",
    cidade: "",
    cep: "",
    uf: "",
    cpf_cnpj: "",
    inscricao_estadual: "",
    fisico_estadual: "Selecione "
  });

  const { nome, data, endereco, bairro, numero, complemento, cidade, cep, uf, cpf_cnpj, inscricao_estadual, fisico_estadual } = cliente;

  const onInputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/clientes", cliente);
    navigate("/cliente");
  }

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>CADASTRO CLIENTE</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Nome' className='form-label bold-text'>
                Nome
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o nome"
                name='nome'
                value={nome}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Data' className='form-label bold-text'>
                Data
              </label>
              <input
                id="inputName"
                type="date"
                className='form-control'
                name='data'
                value={data}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Endereco' className='form-label bold-text'>
                Endereço
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o endereço"
                name='endereco'
                value={endereco}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Bairro' className='form-label bold-text'>
                Bairro
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o bairro"
                name='bairro'
                value={bairro}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Numero' className='form-label bold-text'>
                Número
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o número"
                name='numero'
                value={numero}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Complemento' className='form-label bold-text'>
                Complemento
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o complemento"
                name='complemento'
                value={complemento}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Cidade' className='form-label bold-text'>
                Cidade
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com a cidade"
                name='cidade'
                value={cidade}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Cep' className='form-label bold-text'>
                CEP
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o CEP"
                name='cep'
                value={cep}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Uf' className='form-label bold-text'>
                UF
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com a UF"
                name='uf'
                value={uf}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Cpf_Cnpj' className='form-label bold-text'>
                CPF/CNPJ
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o CPF ou CNPJ"
                name='cpf_cnpj'
                value={cpf_cnpj}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Inscricao_Estadual' className='form-label bold-text'>
                Inscrição Estadual
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com a inscrição estadual"
                name='inscricao_estadual'
                value={inscricao_estadual}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Fisico_Estadual' className='form-label bold-text'>
                Físico Estadual
              </label>
              <select
                id="inputName"
                className='form-control'
                name='fisico_estadual'
                value={fisico_estadual}
                onChange={(e) => onInputChange(e)}
              >
                <option value='Selecione'>Selecione uma opção</option>
                <option value="Contribuinte">Contribuinte</option>
                <option value="Não contribuinte">Não contribuinte</option>
                <option value="Isento">Isento</option>
              </select>
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/cliente'>
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
