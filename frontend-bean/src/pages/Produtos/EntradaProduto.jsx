import React, { useState } from 'react';

function EntradaProduto() {
  const [dataEntrada, setDataEntrada] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [codBarras, setCodBarras] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [custoUnitario, setCustoUnitario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data de Entrada:', dataEntrada);
    console.log('Fornecedor:', fornecedor);
    console.log('Código de Barras:', codBarras);
    console.log('Quantidade:', quantidade);
    console.log('Custo Unitário:', custoUnitario);
    limparCampos();
  };

  const limparCampos = () => {
    setDataEntrada('');
    setFornecedor('');
    setCodBarras('');
    setQuantidade('');
    setCustoUnitario('');
  };

  return (
    <div className='janela'>
      <form onSubmit={handleSubmit}>
        <input className="inputs" type="date" placeholder="Data de Entrada" value={dataEntrada} onChange={(e) => setDataEntrada(e.target.value)} />
        <input className="inputs" type="text" placeholder="Fornecedor" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} />
        <input className="inputs" type="text" placeholder="Código de Barras" value={codBarras} onChange={(e) => setCodBarras(e.target.value)} />
        <input className="inputs" type="number" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        <input className="inputs" type="number" placeholder="Custo Unitário" value={custoUnitario} onChange={(e) => setCustoUnitario(e.target.value)} />

        <div className="buton1">
          <button id="butonLimpar" type="reset">Limpar</button>
          <button id="butonSalvar" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default EntradaProduto;
