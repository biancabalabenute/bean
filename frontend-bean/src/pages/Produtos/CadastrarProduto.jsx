import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './modalProduto.css';

function AlertButton() {
    const handleSaveClick = () => {
      Swal.fire({
        title: "Cadastro feito com sucesso!",
        text: "Produto cadastrado",
        icon: "success",
        position: "center",
        showConfirmButton: false,
        timer: 1500
      });
}

  return (
    <div>
      <p onClick={handleSaveClick}>Salvar</p>
    </div>
  );
};

function CadastrarProduto() {
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [codBarras, setCodBarras] = useState('');
  const [preco, setPreco] = useState('');
  const [lucro, setLucro] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Marca:', marca, 'Categoria:', categoria, 'Cod. de Barras:', codBarras, 'Preço:', preco, 'Margem de Lucro:', lucro, 'Descrição:', descricao);
    setMarca('');
    setCategoria('');
    setCodBarras('');
    setPreco('');
    setLucro('');
    setDescricao('');
  };

  return (
    <div className='janela'>
      <form onSubmit={handleSubmit}>
        <input className="inputs" type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
        <input className="inputs" type="text" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        <input className="inputs" type="text" placeholder="Cod. de Barras" value={codBarras} onChange={(e) => setCodBarras(e.target.value)} />
        <input className="inputs" type="text" placeholder="Preço de Venda" value={preco} onChange={(e) => setPreco(e.target.value)} />
        <input className="inputs" type="text" placeholder="Margem de Lucro %" style={{color: 'steelblue'}} value={lucro} onChange={(e) => setLucro(e.target.value)} />
        <textarea className="inputs" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

        <div className="buton1">
          <button id="butonLimpar" type="submit">Limpar</button>
          <button id="butonSalvar" type="submit"><AlertButton/></button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarProduto;
