import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarVenda() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [venda, setVenda] = useState({
    codigoDeBarras: "",
    data: "",
    quantidade: "",
    plataforma: "Selecione", 
    preco: "",
    custoTotal: "",
    idVendaPlataforma: "", 
    cpfOuCnpj: "" 
  });

  const { codigoDeBarras, data, quantidade, plataforma, preco, custoTotal, idVendaPlataforma, cpfOuCnpj } = venda;

  const onInputChange = (e) => {
    setVenda({ ...venda, [e.target.name]: e.target.value });
  };

  const onCustoUnitarioChange = (e) => {
    const newCustoUnitario = e.target.value;
    setVenda((prevVenda) => ({
      ...prevVenda,
      preco: newCustoUnitario,
      custoTotal: (newCustoUnitario * (prevVenda.quantidade || 0)).toFixed(2)
    }));
  };

  const onQuantidadeChange = (e) => {
    const newQuantidade = e.target.value;
    setVenda((prevVenda) => ({
      ...prevVenda,
      quantidade: newQuantidade,
      custoTotal: (newQuantidade * (prevVenda.preco || 0)).toFixed(2)
    }));
  };

  useEffect(() => {
    loadVenda();
  }, []);

  const loadVenda = async () => {
    try {
      console.log(`Fetching venda with ID: ${id}`);
      const result = await axios.get(`http://localhost:8080/vendas/${id}`);
      console.log('Result from server:', result.data);
      setVenda(result.data);
    } catch (error) {
      console.error('Error fetching venda:', error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/vendas/${id}`, venda);
      navigate('/venda');
    } catch (error) {
      console.error('Error updating venda:', error);
    }
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3 p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>EDITAR VENDA</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Cod' className='form-label bold-text'>
                Cod. Barras
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o código de barras"
                name='codigoDeBarras'
                value={codigoDeBarras}
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
              <label htmlFor='Quantidade' className='form-label bold-text'>
                Quantidade
              </label>
              <input
                id="inputName"
                type="number"
                className='form-control'
                placeholder="Entre com a quantidade"
                name='quantidade'
                value={quantidade}
                onChange={(e) => onQuantidadeChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Canal' className='form-label bold-text'>
                Canal de Venda
              </label>
              <select
                id="inputName"
                className='form-control'
                name='plataforma'
                value={plataforma}
                onChange={(e) => onInputChange(e)}
              >
                <option value="Selecione">Selecione</option>
                <option value="MERCADO LIVRE">MERCADO LIVRE</option>
                <option value="SHOPEE">SHOPEE</option>
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='CustoUnitario' className='form-label bold-text'>
                Custo Unitário
              </label>
              <input
                id="inputName"
                type="number"
                step="0.01"
                className='form-control'
                placeholder="Entre com o custo unitário"
                name='preco'
                value={preco}
                onChange={(e) => onCustoUnitarioChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='CustoTotal' className='form-label bold-text'>
                Custo Total
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                name='custoTotal'
                value={custoTotal}
                readOnly
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='IdVenda' className='form-label bold-text'>
                ID da Venda
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o ID da venda"
                name='idVendaPlataforma'
                value={idVendaPlataforma}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='CpfCnpj' className='form-label bold-text'>
                CPF/CNPJ
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o CPF ou CNPJ"
                name='cpfOuCnpj'
                value={cpfOuCnpj}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/pedidos'>
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
