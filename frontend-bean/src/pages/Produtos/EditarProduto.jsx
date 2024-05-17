import React, { useState } from 'react';
import './modalEditar.css';

function EditarProduto({ onSave }) {
    const [nome, setNome] = useState('');
    const [codBarras, setCodBarras] = useState('');
    const [custo, setCusto] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedProduto = {
            nome: nome,
            codBarras: codBarras,
            custo: custo,
            quantidade: quantidade
        };
        onSave(editedProduto);
    };

    return (
        <div className='janela-edit'>
            <form onSubmit={handleSubmit}>
                <input className="inputs-edit" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input className="inputs-edit" type="text" placeholder="Código de Barras" value={codBarras} onChange={(e) => setCodBarras(e.target.value)} />
                <input className="inputs-edit" type="number" placeholder="Custo" value={custo} onChange={(e) => setCusto(e.target.value)} />
                <input className="inputs-edit" type="number" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                <div className="buton-save">
                    <button id="butonSalvar" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}

export default EditarProduto;
