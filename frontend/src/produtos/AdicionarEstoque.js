import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdicionarEstoque() {
  let navigate = useNavigate();

  const [estoque, setEstoque] = useState({
    data: "",
    codigoDeBarras: "",
    fornecedorId: "",
    quantidade: "",
    custoUnitario: "",
    custoTotal: ""
  });

  const [fornecedores, setFornecedores] = useState([]);
  const [sugestoesProdutos, setSugestoesProdutos] = useState([]);

  useEffect(() => {
    loadFornecedores();
  }, []);

  const loadFornecedores = async () => {
    const result = await axios.get("http://localhost:8080/fornecedores");
    setFornecedores(result.data);
  };

  const onInputChange = (e) => {
    setEstoque({ ...estoque, [e.target.name]: e.target.value });

    if (e.target.name === "codigoDeBarras") {
      loadSugestoesProdutos(e.target.value);
    }
  }

  const loadSugestoesProdutos = async (codigoDeBarras) => {
    if (codigoDeBarras.length > 2) {
      const result = await axios.get(`http://localhost:8080/produtos?codigoDeBarras_like=${codigoDeBarras}`);
      setSugestoesProdutos(result.data);
    } else {
      setSugestoesProdutos([]);
    }
  };

  useEffect(() => {
    const total = parseFloat(estoque.quantidade) * parseFloat(estoque.custoUnitario);
    setEstoque((prevEstoque) => ({
      ...prevEstoque,
      custoTotal: isNaN(total) ? "" : total.toFixed(2)
    }));
  }, [estoque.quantidade, estoque.custoUnitario]);

  const onSugestaoClick = (produto) => {
    setEstoque({ ...estoque, codigoDeBarras: produto.codigoDeBarras });
    setSugestoesProdutos([]);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const estoqueParaEnvio = {
      ...estoque,
      fornecedorId: parseInt(estoque.fornecedorId),
      quantidade: parseInt(estoque.quantidade),
      custoUnitario: parseFloat(estoque.custoUnitario),
      custoTotal: parseFloat(estoque.custoTotal)
    };
    await axios.post("http://localhost:8080/estoques", estoqueParaEnvio);
    navigate("/estoque");
  }

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>ADICIONAR ESTOQUE</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Data' className='form-label bold-text'>
                Data
              </label>
              <input
                id="inputName"
                type={"date"}
                className='form-control'
                name='data'
                value={estoque.data}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='CodigoDeBarras' className='form-label bold-text'>
                Código de Barras
              </label>
              <input
                id="inputName"
                type={"text"}
                className='form-control'
                placeholder="Entre com o código de barras"
                name='codigoDeBarras'
                value={estoque.codigoDeBarras}
                onChange={(e) => onInputChange(e)}
                autoComplete="off"
              />
              {sugestoesProdutos.length > 0 && (
                <ul className='list-group'>
                  {sugestoesProdutos.map((produto) => (
                    <li
                      key={produto.id}
                      className='list-group-item list-group-item-action'
                      onClick={() => onSugestaoClick(produto)}
                    >
                      {produto.codigoDeBarras} - {produto.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className='mb-3'>
              <label htmlFor='Fornecedor' className='form-label bold-text'>
                Fornecedor
              </label>
              <select
                id="inputName"
                className='form-control'
                name='fornecedorId'
                value={estoque.fornecedorId}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Selecione um fornecedor</option>
                {fornecedores.map((fornecedor) => (
                  <option key={fornecedor.id} value={fornecedor.id}>
                    {fornecedor.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='Quantidade' className='form-label bold-text'>
                Quantidade
              </label>
              <input
                id="inputName"
                type={"number"}
                className='form-control'
                placeholder="Entre com a quantidade"
                name='quantidade'
                value={estoque.quantidade}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='CustoUnitario' className='form-label bold-text'>
                Custo Unitário
              </label>
              <input
                id="inputName"
                type={"number"}
                step="0.01"
                className='form-control'
                placeholder="Entre com o custo unitário"
                name='custoUnitario'
                value={estoque.custoUnitario}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='CustoTotal' className='form-label bold-text'>
                Custo Total
              </label>
              <input
                id="inputName"
                type={"text"}
                className='form-control'
                name='custoTotal'
                value={estoque.custoTotal}
                readOnly
              />
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/produto'>
                CANCELAR
              </Link>
              <button type='submit' className='btn btn-primary'>
                ADICIONAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
