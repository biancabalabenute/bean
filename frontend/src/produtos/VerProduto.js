import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function VerProduto() {
  const [produto, setProduto] = useState({
    name: "",
    codigoDeBarras: "",
    modelo: "",
    categorias: [],
    marcas: [],
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduto();
  }, []);

  const loadProduto = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/produtos/${id}`);
      console.log(result.data);
      setProduto(result.data);
    } catch (error) {
      console.error("Erro ao carregar produto:", error);
    }
  };

  if (!produto.name) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3 p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>DETALHES DO PRODUTO</h2>
          <div className='details-card'>
            <div className='card-header text-center'>
              Detalhes da categoria id: {id}
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Nome:</b> {produto.name}
              </li>
              <li className='list-group-item'>
                <b>Código de Barras:</b> {produto.codigoDeBarras}
              </li>
              <li className='list-group-item'>
                <b>Modelo:</b> {produto.modelo}
              </li>
              <li className='list-group-item'>
                <b>Categorias:</b> {produto.categorias.length > 0 ? produto.categorias.map(cat => cat.name).join(", ") : 'Carregando...'}
              </li>
              <li className='list-group-item'>
                <b>Marcas:</b> {produto.marcas.length > 0 ? produto.marcas.map(marca => marca.name).join(", ") : 'Carregando...'}
              </li>
            </ul>
          </div>
          <div className='button-container mt-3'>
            <Link className='btn btn-primary' to='/produto'>
              VOLTAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
