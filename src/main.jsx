import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Tecnologias from './Pages/Tecnologias';
import Repositorios from './Pages/Repositorios';
import Contatos from './Pages/Contatos';
import NoPage from './Pages/NoPage';
import '../src/assets/css/index.css';



export default function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tecnologias" element={<Tecnologias />} />
            <Route path="repositorios" element={<Repositorios />} />
            <Route path="contatos" element={<Contatos />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
