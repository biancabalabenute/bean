import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function VerMarca() {
  const { id } = useParams();
  const [marca, setMarca] = useState({
    name: ''
  });

  useEffect(() => {
    loadMarca();
  }, []);

  const loadMarca = async () => {
    const result = await axios.get(`http://localhost:8080/marcas/${id}`);
    setMarca(result.data);
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>DETALHES MARCA</h2>
          <div className='details-card'>
            <div className='card-header text-center'>
              Detalhes da marca id: {id}
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Nome: </b>{marca.name}
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <Link className='btn btn-primary my-2' to={"/marca"}>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
