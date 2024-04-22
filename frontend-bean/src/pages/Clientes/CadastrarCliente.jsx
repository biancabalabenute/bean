
import React,{ useState } from 'react';
import React,{ useState } from 'react';

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
      <h2>Cadastrar Clientes</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="date" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} />
        <input type="text" placeholder="Endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        <input type="number" placeholder="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
        <input type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
        <input type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
        <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        <input type="text" placeholder="UF" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarClientes;
