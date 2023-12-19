// Reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container customClass="min-height">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
