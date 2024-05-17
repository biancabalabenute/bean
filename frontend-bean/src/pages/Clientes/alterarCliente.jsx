
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.min.css" />;
<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.all.min.js' ></script>;

  function AError(){
    const handleSaveClick =()=>{
      Swal.fire({
        icon: "error",
        title: "Ops! Usuário não foi alterado...",
        footer: '<a href="#">Tente alterar novamente!</a>'
      });
    }
    return handleSaveClick()
  }


  function ASucess() {
  const handleSaveClick = () => {
    Swal.fire({
     title: "Alterações feitas com sucesso!",
     text: " Vancley Vieira",
     icon: "success"
   });
 };

  return (
    handleSaveClick()
    
  );
};




const EditarCliente = ({ clienteId }) => {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
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
  useEffect(() => {
    // Carregar detalhes do cliente quando o componente for montado
    axios.get(`sua_api/clientes/${clienteId}`)
      .then(response => {
        setCliente(response.data);
        setCodigo(response.data.codigo);
        setName(response.data.name);
        setDate(response.data.date);
        setEndereco(response.data.endereco);
        setNumero(response.data.numero);
        setBairro(response.data.bairro);
        setComplemento(response.data.complemento);
        setCidade(response.data.cidade);
        setUf(response.data.uf);
        setCep(response.data.cep);
        setCpf(response.data.cpf);
        setInscricaoEstadual(response.data.inscricaoEstadual);
        setFisicoEstadual(response.data.fisicoEstadual);
      })
      .catch(error => {
        console.error('Erro ao carregar cliente:', error);
      });
  }, [clienteId]);

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCliente = {
      ...cliente,
      codigo,
      name,
      date,
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

    // Enviar solicitação para atualizar o cliente no banco de dados
    axios.put(`sua_api/clientes/${clienteId}`, novoCliente)
      .then(response => {
        console.log(ASucess(), response.data);
        
        // Aqui você pode redirecionar o usuário para outra página ou fazer qualquer outra ação após a atualização bem-sucedida
      })
      .catch(error => {
        console.error(AError(), error);
      });
  };

  return (
    <div>
      <h1>Editar Cliente</h1>
      (clienteId):
      <form onSubmit={handleSubmit}>
      <input style={{width:'120px'}} class ="inputs" placeholder="Codigo" type="number" value={codigo} onChange={handleCodigoChange} />
          <input id="nome" class ="inputs" type="text" placeholder="Nome"  value={name} onChange={handleNameChange} />
          <input  id="codigo" style={{width: '150px'}} class ="inputs" placeholder="Data"type="datetime-local" value={date} onChange={handleDateChange} />
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
        <button style={{marginTop:'100px', marginLeft:'780px'}} id="butonSalvar" type="submit">Salvar</button>
      </form>

    </div>

    

  );
};

export default EditarCliente;
