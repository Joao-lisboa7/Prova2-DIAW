import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Votacao from './pages/Votacao';
import Resultado from './pages/Resultado';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/votacao" element={<Votacao />}/>
        <Route path="/resultado" element={<Resultado />}/>
      </Routes>
    </BrowserRouter>
  );
}