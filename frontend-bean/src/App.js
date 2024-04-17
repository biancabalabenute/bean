import { RouterProvider, createBrowserRouter, Route, Routes } from 'react-router-dom';
import TelaLogin from './pages/TelaLogin';
import MenuPrincipal from './pages/MenuPrincipal/MenuPrincipal';
import SideNav from './pages/MenuPrincipal/SideNav'
import Produto from './pages/Produtos/Produto';
import Cliente from './pages/Clientes/Cliente';
import Cadastro from './pages/Cadastros/Cadastro';
import Venda from './pages/Vendas/Vendas';

const routers = createBrowserRouter([{
  path: "/login",
  element: <TelaLogin />
}, {
  path: "*",
  element: (
    <div className="app-container">
      <SideNav />  
      <Routes>
        <Route path="/menu" element={<MenuPrincipal />} />
        <Route path="/produto" element={<Produto />} /> 
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/venda" element={<Venda />} />
      </Routes>
    </div>
  ),
}

])

function App() {
  return (

    <div className="App">
      <div className="card-container">
        <RouterProvider router={routers} />
      </div>
    </div>

  );
}

export default App;
