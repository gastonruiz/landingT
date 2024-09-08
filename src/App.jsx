import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotras from "./components/pages/Nosotras";
import Cursos from "./components/pages/Cursos";
import Galeria from "./components/pages/Galeria";
import Contacto from "./components/pages/Contacto";
import Material from "./components/pages/Material";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/material" element={<Material />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
