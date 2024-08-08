import React from 'react'
import { Link } from 'react-router-dom'
import logoReact from '../assets/img/tecnologias/react.png'
import logoNode from '../assets/img/tecnologias/node.png'
import logoJava from '../assets/img/tecnologias/java.png'
import logoHtml from '../assets/img/tecnologias/html-css-js.png'

const Tecnologias = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="position-absolute w-100 ">
        <div className="container-fluid d-flex align-items-center justify-content-center gap-3 p-3 ">
          <div className="card bg-dark  col-md-2" data-bs-theme="dark" >
            <img src={logoReact} className="card-img-top" alt="react" />
=======
      <div className="w-100 ">
        <div className="container-fluid d-flex align-items-center justify-content-center gap-3 p-3">
          <div className="card bg-dark  col-md-2" data-bs-theme="dark">
            <img src={logoReact} className="card-img-top" alt="react"/>
>>>>>>> att
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">É uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e eficientes, favorecendo componentes reutilizáveis e performance otimizada.</p>
              
            </div>
          </div>
          <div className="card bg-dark col-md-2" data-bs-theme="dark" >
            <img src={logoNode} className="card-img-top" alt="node.js" />
            <div className="card-body">
              <h5 className="card-title">Node.js</h5>
              <p className="card-text">É um ambiente de execução JavaScript assíncrono, baseado no V8, usado para criar aplicações de rede escaláveis e rápidas.</p>
              
            </div>
          </div>
          <div className="card bg-dark col-md-2" data-bs-theme="dark" >
            <img src={logoJava} className="card-img-top" alt="Java" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">É uma linguagem de programação de propósito geral, orientada a objetos, conhecida pela sua portabilidade e uso em aplicações empresariais.</p>
              
            </div>
          </div>
          <div className="card bg-dark col-md-2" data-bs-theme="dark" >
            <img src={logoHtml} className="card-img-top" alt="html css javascript" />
            <div className="card-body">
              <h5 className="card-title mt-2 ">HTML CSS JS</h5>
              <p className="card-text">São essenciais para desenvolver páginas web interativas; HTML estrutura o conteúdo, CSS estiliza e JavaScript adiciona interatividade.</p>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Tecnologias