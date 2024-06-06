import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarCategoria() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [categoria, setCategoria] = useState({
    name: ''
  });

  const { name } = categoria;

  const onInputChange = (e) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCategoria();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/categorias/${id}`, categoria);
    navigate('/categoria');
  };

  const loadCategoria = async () => {
    const result = await axios.get(`http://localhost:8080/categorias/${id}`);
    setCategoria(result.data);
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>EDITAR CATEGORIA</h2>
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
              <Link className='btn btn-danger' to='/categoria'>
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
