
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './css/games.css';
import './css/header.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Jogos from "./pages/Jogos";
import Aplicativos from "./pages/Aplicativos";
import Extensoes from "./pages/Extensoes";
import Livros from "./pages/Livros";
import Cursos from "./pages/Cursos";
import Desenvolvedor from "./pages/Desenvolvedor";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/aplicativos" element={<Aplicativos />} />
        <Route path="/extensoes" element={<Extensoes />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/desenvolvedor" element={<Desenvolvedor />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
