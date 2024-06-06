import React from 'react';
import './App.css';
import Sidebar from './layouts/Sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCategoria from './pages/HomeCategoria';
import AdicionarCategoria from './categoria/AdicionarCategoria';
import EditarCategoria from './categoria/EditarCategoria';
import VerCategoria from './categoria/VerCategoria';
import HomeMarca from './pages/HomeMarca';
import AdicionarMarca from './marca/AdicionarMarca';
import EditarMarca from './marca/EditarMarca';
import VerMarca from './marca/VerMarca';
import HomeFornecedor from './pages/HomeFornecedor';
import AdicionarFornecedor from './fornecedor/AdicionarFornecedor';
import EditarFornecedor from './fornecedor/EditarFornecedor';
import VerFornecedor from './fornecedor/VerFornecedor';
import HomeProduto from './pages/HomeProduto';
import AdicionarProduto from './produtos/AdicionarProduto';
import EditarProduto from './produtos/EditarProduto';
import VerProduto from './produtos/VerProduto';
import HomeCliente from './pages/HomeCliente';
import AdicionarCliente from './clientes/AdicionarCliente';
import VerCliente from './clientes/VerCliente';
import EditarCliente from './clientes/EditarCliente';
import AdicionarEstoque from './produtos/AdicionarEstoque';
import HomeVenda from './pages/HomeVenda';
import AdicionarVenda from './venda/AdicionarVenda';
import EditarVenda from './venda/EditarVenda';
import VerVenda from './venda/VerVenda';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/categoria" element={<HomeCategoria />} />
          <Route path="/adicionarcategoria" element={<AdicionarCategoria />} />
          <Route path="/editarcategoria/:id" element={<EditarCategoria />} />
          <Route path="/vercategoria/:id" element={<VerCategoria />} />

          <Route path="/marca" element={<HomeMarca />} />
          <Route path="/adicionarmarca" element={<AdicionarMarca />} />
          <Route path="/editarmarca/:id" element={<EditarMarca />} />
          <Route path="/vermarca/:id" element={<VerMarca />} />

          <Route path="/fornecedor" element={<HomeFornecedor />} />
          <Route path="/adicionarfornecedor" element={<AdicionarFornecedor />} />
          <Route path="/editarfornecedor/:id" element={<EditarFornecedor />} />
          <Route path="/verfornecedor/:id" element={<VerFornecedor />} />

          <Route path="/produto" element={<HomeProduto />} />
          <Route path="/adicionarproduto" element={<AdicionarProduto />} />
          <Route path="/editarproduto/:id" element={<EditarProduto />} />
          <Route path="/verproduto/:id" element={<VerProduto />} />

          <Route path="/cliente" element={<HomeCliente />} />
          <Route path="/adicionarcliente" element={<AdicionarCliente />} />
          <Route path="/editarcliente/:id" element={<EditarCliente />} />
          <Route path="/vercliente/:id" element={<VerCliente />} />
          <Route path="/estoque" element={<AdicionarEstoque />} />

          <Route path="/pedidos" element={<HomeVenda />} />
          <Route path="/adicionarvenda" element={<AdicionarVenda />} />
          <Route path="/editarvenda/:id" element={<EditarVenda />} />
          <Route path="/vervenda/:id" element={<VerVenda />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;