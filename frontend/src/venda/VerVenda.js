import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';

export default function VerVenda() {
  const { id } = useParams();
  const [venda, setVenda] = useState(null);

  useEffect(() => {
    loadVenda();
  }, []);

  const loadVenda = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/pedidos/${id}`);
      setVenda(result.data);
    } catch (error) {
      console.error('Erro ao carregar venda:', error);
    }
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3 p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>DETALHES DA VENDA</h2>
          {venda && (
            <div className='details-card'>
              <div className='card-header text-center'>
                Detalhes da Venda de id: {id}
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Cliente: </b>{venda.cliente.name}
                </li>
                <li className='list-group-item'>
                  <b>Data da Venda: </b>{format(new Date(venda.instant), 'dd/MM/yyyy HH:mm:ss')}
                </li>
                <li className='list-group-item'>
                  <b>Total: </b>{venda.total}
                </li>
                <li className='list-group-item'>
                  <b>Itens: </b>
                  <ul style={{ listStyleType: 'none' }}>
                    {venda.itens.map((item, index) => (
                      <li key={index}>
                        <b>Produto: </b>{item.produto.name}
                        <br/><b>Quantidade: </b>{item.quantidade}
                        <br/><b>Preço Unitário: </b>{item.preco}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          )}
          <div className='text-center'>
            <Link className='btn btn-primary my-2' to='/pedidos'>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
