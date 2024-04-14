import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TelaLogin from './pages/TelaLogin';
import MenuPrincipal from './pages/MenuPrincipal/MenuPrincipal';


const routers = createBrowserRouter([{
  path: "/login",
  element: <TelaLogin />
}, {
  path: "/",
  element: <h1>Rota</h1>
},
{
  path: "/menu",
  element: <MenuPrincipal/>
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
