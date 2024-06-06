import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function VerCliente() {
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    name: '',
    dataCadastro: '',
    enderecos: [],
    cpfOuCnpj: '',
    inscricaoEstadual: '',
    tipoFisicoEstadual: 'Selecione'
  });

  useEffect(() => {
    loadCliente();
  }, []);

  const loadCliente = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/clientes/${id}`);
      setCliente(result.data);
    } catch (error) {
      console.error("Erro ao carregar cliente:", error);
    }
  };

  return (
    <div className='main-content'>
      <div className='main-header'>
        <div className='col-md-6 offset-md-3 p-4 mt-2 div-ver'>
          <h2 className='text-center m-4'>DETALHES CLIENTE</h2>
          <div className='details-card'>
            <div className='card-header text-center'>
              Detalhes do Cliente de id: {id}
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Nome: </b>{cliente.name}
              </li>
              <li className='list-group-item'>
                <b>Data de Cadastro: </b>{new Date(cliente.dataCadastro).toLocaleString()}
              </li>
              <li className='list-group-item'>
                <b>CPF/CNPJ: </b>{cliente.cpfOuCnpj}
              </li>
              <li className='list-group-item'>
                <b>Inscrição Estadual: </b>{cliente.inscricaoEstadual}
              </li>
              <li className='list-group-item'>
                <b>Físico Estadual: </b>{cliente.tipoFisicoEstadual}
              </li>
              <li className='list-group-item'>
                {cliente.enderecos.map((endereco, index) => (
                  <div key={index}>
                    <p><b>Endereço: </b></p>
                    <p><b>Logradouro:</b> {endereco.logradouro}, <b>Número: </b>{endereco.numero}</p>
                    <p><b>Bairro:</b> {endereco.bairro}, <b>Complemento: </b>{endereco.complemento}</p>
                    <p><b>Cidade: </b>{endereco.cidade.nome}, <b>UF: </b>{endereco.cidade.estado.uf}</p>
                    <p><b>CEP:</b> {endereco.cep}</p>
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <Link className='btn btn-primary my-2' to={"/cliente"}>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
