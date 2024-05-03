import React, { useState } from 'react';
import './modalBuscar.css';

function BuscarProdutos() {
  const [marca, setMarca] = useState('');
  const [codBarras, setCodBarras] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBuscarClick = () => {
    const produtosEncontrados = [
      { id: 1, marca: 'Marca A', codBarras: '1234567890', descricao: 'Descrição do produto 1' },
      { id: 2, marca: 'Marca B', codBarras: '0987654321', descricao: 'Descrição do produto 2' }
    ];

    const resultadosFiltrados = produtosEncontrados.filter(produto => {
      return produto.marca.toLowerCase().includes(marca.toLowerCase()) && produto.codBarras.includes(codBarras);
    });

    setResultados(resultadosFiltrados);
  };

  return (
    <div className='janela'>
      <div>
        <h2>Buscar Produtos</h2>
        <input className="inputs" type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
        <input className="inputs" type="text" placeholder="Cód. de Barras" value={codBarras} onChange={(e) => setCodBarras(e.target.value)} />
        <button id="butonBuscar" type="button" onClick={handleBuscarClick}>Buscar</button>
      </div>
      <div className="resultados">
        {resultados.length > 0 ? (
          <div>
            <h3>Resultados para "{marca}"</h3>
            <ul>
              {resultados.map(produto => (
                <li key={produto.id}>
                  <p>Marca: {produto.marca}</p>
                  <p>Cód. de Barras: {produto.codBarras}</p>
                  <p>Descrição: {produto.descricao}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default BuscarProdutos;
