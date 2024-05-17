import React, { useState } from 'react';
import './modalMarca.css'

function CadastrarMarca() {
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Marca:', marca);
    console.log('Categoria:', categoria);
    limparCampos();
  };

  const limparCampos = () => {
    setMarca('');
    setCategoria('');
  };

  return (
    <div className='janela'>
      <form onSubmit={handleSubmit}>
        <input className="inputs" type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
        <input className="inputs" type="text" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />

        <div className="buton1">
          <button id="butonLimpar" type="reset">Limpar</button>
          <button id="butonSalvar" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarMarca;
