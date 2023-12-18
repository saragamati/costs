// Reaproveitamento de estrutura
import { Link, Outlet } from "react-router-dom";
import Container from "./components/layout/Container";

function App() {
  return (
    <div className="App">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Container customClass="min-height">
        <Outlet />
      </Container>

      <p>Footer</p>
    </div>
  );
}

export default App;
