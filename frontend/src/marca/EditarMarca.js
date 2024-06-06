import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarMarca() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [marca, setMarca] = useState({
    name: ''
  });

  const { name } = marca;

  const onInputChange = (e) => {
    setMarca({ ...marca, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadMarca();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/marcas/${id}`, marca);
    navigate('/marca');
  };

  const loadMarca = async () => {
    const result = await axios.get(`http://localhost:8080/marcas/${id}`);
    setMarca(result.data);
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>EDITAR MARCA</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label bold-text'>
                Nome
              </label>
              <input
                id="inputName"
                type={'text'}
                className='form-control'
                placeholder='Entre com o nome'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/marca'>
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
