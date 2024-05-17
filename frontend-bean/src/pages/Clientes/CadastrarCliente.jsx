
import React, { useState } from 'react';
import axios from 'axios';
import './CadastrarCliente.css';
import Swal from 'sweetalert2';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.min.css" />;
<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.all.min.js' ></script>;

  function AlertError(){
    const handleSaveClick =()=>{
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar usuário...",
        footer: '<a href="#">Deseja cadastrar novamente?</a>'
      });
    }
    return handleSaveClick()
  }


  function AlertSucess() {
  const handleSaveClick = () => {
    Swal.fire({
     title: "Cadastro feito com sucesso!",
     text: " Vancley Vieira",
     icon: "success"
   });
 };

  return (
    handleSaveClick()
    
  );
};

const CadastrarCliente = () => {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [fisicoEstadual, setFisicoEstadual] = useState('');
  const [mensagem, setMensagem] = useState('');

  
  
  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };
  const handleDataChange = (event) => {
    setData(event.target.value);
  };
  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };
  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };
  const handleBairroChange = (event) => {
    setBairro(event.target.value);
  };
  const handleComplementoChange = (event) => {
    setComplemento(event.target.value);
  };
  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  };
  const handleUfChange = (event) => {
    setUf(event.target.value);
  };
  const handleCepChange = (event) => {
    setCep(event.target.value);
  };
  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };
  const handleInscricaoEstadualChange = (event) => {
    setInscricaoEstadual(event.target.value);
  };
  const handleFisicoEstadualChange = (event) => {
    setFisicoEstadual(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novoCliente = {
      codigo,
      nome,
      data,
      endereco,
      numero,
      bairro,
      complemento,
      cidade,
      uf,
      cep,
      cpf,
      inscricaoEstadual,
      fisicoEstadual
    };
    
    try {
      const response = await axios.post('sua_api/clientes', novoCliente);
      console.log('Cliente cadastrado com sucesso:', response.data);
      setMensagem(AlertSucess());
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      setMensagem( AlertError());
    }
  };

  return (
    <div className='janela'>
      <form onSubmit={handleSubmit}>
      <input style={{width:'120px'}} class ="inputs" placeholder="Codigo" type="number" value={codigo} onChange={handleCodigoChange} />
          <input id="nome" class ="inputs" type="text" placeholder="Nome"  value={nome} onChange={handleNomeChange} />
          <input  id="codigo" style={{width: '150px'}} class ="inputs" placeholder="Data"type="datetime-local" value={data} onChange={handleDataChange} />
          <input class ="inputs" placeholder="Endereco" type="text" value={endereco} onChange={handleEnderecoChange} />
          <input style={{width:'65px'}} class ="inputs"  placeholder="Numero" type="number" value={numero} onChange={handleNumeroChange} />
          <input style={{width:'205px'}} class ="inputs" placeholder="Bairro" type="text" value={bairro} onChange={handleBairroChange} />
          <input style={{width:'380px'}} class ="inputs" placeholder="Complemento" type="text" value={complemento} onChange={handleComplementoChange} />
          <input style={{width:'180px'}} class ="inputs" placeholder="Cidade"  type="text" value={cidade} onChange={handleCidadeChange} />
          <input   style={{width:'30px'}} class ="inputs" placeholder="UF" type="text" value={uf} onChange={handleUfChange} />
          <input  style={{width:'125px'}} class ="inputs" placeholder="CEP" type="number" value={cep} onChange={handleCepChange} />
          <input style={{width:'150px'}} class ="inputs" placeholder="CPF" type="number" value={cpf} onChange={handleCpfChange} />
          <input style={{width:"200px"}} class ="inputs" placeholder='InscricaoEstadual' type="text" value={inscricaoEstadual} onChange={handleInscricaoEstadualChange} />
          <input style={{width:"395px"}}  class ="inputs" placeholder='FisicoEstadual' type="text" value={fisicoEstadual} onChange={handleFisicoEstadualChange} />
          <button id = "butonSalvar" type="submit">Salvar</button>

      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastrarCliente;
