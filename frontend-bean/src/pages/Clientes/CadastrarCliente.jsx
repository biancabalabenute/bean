
import React,{ useState } from 'react';
import './CadastrarCliente.css';
import Swal from 'sweetalert2';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.min.css" />;
<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11.10.8/dist/sweetalert2.all.min.js' ></script>;

function AlertButton() {
  const handleSaveClick = () => {
    Swal.fire({
      title: "Cadastro feito com sucesso!",
      text: "Vancley Vieira",
      icon: "success"
    });
  };
  return (
    <div>
      <p onClick={handleSaveClick}>Salvar</p>
    </div>
  );
};

function CadastrarClientes() {
  
  
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [fisicoEstadual, setFisicoEstadual] = useState('');
  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend ou fazer qualquer outra ação necessária
    console.log( 'Codigo:', codigo,'Nome:', nome,'Data:',data, 'Endereco:',endereco, 'Numero:',numero,'Bairro:',bairro, 'Complemento:',complemento,'Cidade:',cidade,'UF:',uf,'Cep:',cep,'Cpf:',cpf,'InscricaoEstadual:',inscricaoEstadual,'FisicoEstadual:',fisicoEstadual,);
    // Limpa os campos após o envio
    setCodigo('');
    setNome('');
    setData('');
    setEndereco('');
    setNumero('');
    setBairro('');
    setComplemento('');
    setCidade('');
    setUF('');
    setCep('');
    setCpf('');
    setInscricaoEstadual('');
    setFisicoEstadual('');
  };

  return (
    <div className='janela'>
      <form onSubmit={handleSubmit}>
        <input style={{width:'120px'}} class ="inputs" type="number" placeholder="Codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        <input  id="nome" class ="inputs" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input id="codigo" style={{width: '150px'}} class ="inputs"type="date" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} />
        <br />
        <input  class ="inputs" type="text" placeholder="Endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        <input style={{width:'65px'}} class ="inputs" type="number" placeholder="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
        <input style={{width:'205px'}} class ="inputs" type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
        <br />
        <input style={{width:'380px'}} class ="inputs" type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
        <input style={{width:'180px'}} class ="inputs" type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        <input style={{width:'30px'}} class ="inputs" type="text" placeholder="UF" value={uf} onChange={(e) => setCidade(e.target.value)} />
        <input style={{width:'125px'}} class ="inputs" type="number" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
        <input style={{width:'150px'}} class ="inputs" type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <input class ="inputs" type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <br />
        <div class="buton1">
        <button  id="butonLimpar" type="submit">Limpar</button>
        <button  id = "butonSalvar" type="submit"> <AlertButton/> </button>
      
        </div>
      
        
        
      </form>
    </div>
  );
}

export default CadastrarClientes;

