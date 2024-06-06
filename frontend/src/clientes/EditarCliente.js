import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarCliente() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [cliente, setCliente] = useState({
    nome: '',
    data: '',
    endereco: '',
    bairro: '',
    numero: '',
    complemento: '',
    cidade: '',
    cep: '',
    uf: '',
    cpf_cnpj: '',
    inscricao_estadual: '',
    fisico_estadual: 'Selecione'
  });

  const { nome, data, endereco, bairro, numero, complemento, cidade, cep, uf, cpf_cnpj, inscricao_estadual, fisico_estadual } = cliente;

  const onInputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCliente();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/clientes/${id}`, cliente);
    navigate('/cliente');
  };

  const loadCliente = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/clientes/${id}`);
      const data = result.data;
      setCliente({
        nome: data.nome || '',
        data: data.data || '',
        endereco: data.endereco || '',
        bairro: data.bairro || '',
        numero: data.numero || '',
        complemento: data.complemento || '',
        cidade: data.cidade || '',
        cep: data.cep || '',
        uf: data.uf || '',
        cpf_cnpj: data.cpf_cnpj || '',
        inscricao_estadual: data.inscricao_estadual || '',
        fisico_estadual: data.fisico_estadual || 'Selecione'
      });
    } catch (error) {
      console.error('Erro ao carregar cliente:', error);
    }
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3 p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>EDITAR CLIENTE</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='nome' className='form-label bold-text'>
                Nome
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o nome'
                name='nome'
                value={nome}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='data' className='form-label bold-text'>
                Data
              </label>
              <input
                id="inputName"
                type='date'
                className='form-control'
                name='data'
                value={data}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='endereco' className='form-label bold-text'>
                Endereço
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o endereço'
                name='endereco'
                value={endereco}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='bairro' className='form-label bold-text'>
                Bairro
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o bairro'
                name='bairro'
                value={bairro}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='numero' className='form-label bold-text'>
                Número
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o número'
                name='numero'
                value={numero}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='complemento' className='form-label bold-text'>
                Complemento
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o complemento'
                name='complemento'
                value={complemento}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='cidade' className='form-label bold-text'>
                Cidade
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com a cidade'
                name='cidade'
                value={cidade}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='cep' className='form-label bold-text'>
                CEP
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o CEP'
                name='cep'
                value={cep}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='uf' className='form-label bold-text'>
                UF
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com a UF'
                name='uf'
                value={uf}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='cpf_cnpj' className='form-label bold-text'>
                CPF/CNPJ
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com o CPF ou CNPJ'
                name='cpf_cnpj'
                value={cpf_cnpj}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='inscricao_estadual' className='form-label bold-text'>
                Inscrição Estadual
              </label>
              <input
                id="inputName"
                type='text'
                className='form-control'
                placeholder='Entre com a inscrição estadual'
                name='inscricao_estadual'
                value={inscricao_estadual}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='fisico_estadual' className='form-label bold-text'>
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
                <option value='Contribuinte'>Contribuinte</option>
                <option value='Não contribuinte'>Não contribuinte</option>
                <option value='Isento'>Isento</option>
              </select>
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/cliente'>
                CANCELAR
              </Link>
              <button type='submit' className='btn btn-primary'>
                TERMINAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
