import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarProduto() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [produto, setProduto] = useState({
    name: "",
    codigoDeBarras: "",
    modelo: "",
    categoriaId: "",
    marcaId: ""
  });

  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);

  const { name, codigoDeBarras, modelo, categoriaId, marcaId } = produto;

  useEffect(() => {
    loadProduto();
    loadCategorias();
    loadMarcas();
  }, []);

  const loadCategorias = async () => {
    const result = await axios.get("http://localhost:8080/categorias");
    setCategorias(result.data);
  };

  const loadMarcas = async () => {
    const result = await axios.get("http://localhost:8080/marcas");
    setMarcas(result.data);
  };

  const loadProduto = async () => {
    const result = await axios.get(`http://localhost:8080/produtos/${id}`);
    setProduto(result.data);
  };

  const onInputChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/produtos/${id}`, produto);
    navigate('/produto');
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3  p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>EDITAR PRODUTO</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label bold-text'>
                Nome
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o nome"
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='codigoDeBarras' className='form-label bold-text'>
                Código de Barras
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o código de barras"
                name='codigoDeBarras'
                value={codigoDeBarras}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='modelo' className='form-label bold-text'>
                Modelo
              </label>
              <input
                id="inputName"
                type="text"
                className='form-control'
                placeholder="Entre com o modelo"
                name='modelo'
                value={modelo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='categoriaId' className='form-label bold-text'>
                Categoria
              </label>
              <select
                id="inputName"
                className='form-control'
                name='categoriaId'
                value={categoriaId}
                onChange={(e) => onInputChange(e)}
              >
                <option value=''>Selecione uma categoria</option>
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                ))}
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='marcaId' className='form-label bold-text'>
                Marca
              </label>
              <select
                id="inputName"
                className='form-control'
                name='marcaId'
                value={marcaId}
                onChange={(e) => onInputChange(e)}
              >
                <option value=''>Selecione uma marca</option>
                {marcas.map(marca => (
                  <option key={marca.id} value={marca.id}>{marca.name}</option>
                ))}
              </select>
            </div>
            <div className='button-container'>
              <Link className='btn btn-danger' to='/produto'>
                CANCELAR
              </Link>
              <button type='submit' className='btn btn-primary'>
                EDITAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
