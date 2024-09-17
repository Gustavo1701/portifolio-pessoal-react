import React from 'react';
import logoReact from '../assets/img/tecnologias/cards/react.png';
import logoNode from '../assets/img/tecnologias/cards/node.png';
import logoJava from '../assets/img/tecnologias/cards/java.png';
import logoHtml from '../assets/img/tecnologias/cards/html-css-js.png';
import logoGit from '../assets/img/tecnologias/cards/git.png';
import logoBootstrap from '../assets/img/tecnologias/cards/bootstrap.png';
import logoTailwind from '../assets/img/tecnologias/cards/tailwind.png';
import logoMysql from '../assets/img/tecnologias/cards/mysql.png';

const Tecnologias = () => {
  return (
    <div className="w-100">
      <div className="container-fluid d-flex flex-wrap align-items-stretch justify-content-center gap-3 p-3">

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoReact} className="card-img-top" alt="React" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">React.js</h5>
            <p className="card-text flex-grow-1">
              É uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e eficientes, favorecendo componentes reutilizáveis e performance otimizada.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoNode} className="card-img-top" alt="Node.js" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">Node.js</h5>
            <p className="card-text flex-grow-1">
              É um ambiente de execução JavaScript assíncrono, baseado no V8, usado para criar aplicações de rede escaláveis e rápidas.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoJava} className="card-img-top" alt="Java" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">Java</h5>
            <p className="card-text flex-grow-1">
              É uma linguagem de programação de propósito geral, orientada a objetos, conhecida pela sua portabilidade e uso em aplicações empresariais.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoHtml} className="card-img-top" alt="HTML CSS JS" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title mt-2">HTML CSS JS</h5>
            <p className="card-text flex-grow-1">
              São essenciais para desenvolver páginas web interativas; HTML estrutura o conteúdo, CSS estiliza e JavaScript adiciona interatividade.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoGit} className="card-img-top" alt="Git" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">Git</h5>
            <p className="card-text flex-grow-1">
              É um sistema de controle de versão distribuído para rastrear mudanças no código-fonte durante o desenvolvimento de software.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoBootstrap} className="card-img-top" alt="Bootstrap" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">Bootstrap</h5>
            <p className="card-text flex-grow-1">
              É um framework de CSS que facilita o desenvolvimento de sites responsivos e estilizados com componentes pré-definidos.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoTailwind} className="card-img-top" alt="Tailwind" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">Tailwind CSS</h5>
            <p className="card-text flex-grow-1">
              É um framework de CSS utilitário que permite a criação de designs personalizados sem sair do HTML.
            </p>
          </div>
        </div>

        <div className="card bg-dark text-light border border-primary-subtle" data-bs-theme="dark" style={{ width: '16rem', height: '24rem', display: 'flex', flexDirection: 'column' }}>
          <img src={logoMysql} className="card-img-top" alt="MySQL" style={{ objectFit: 'contain', width: '100%', height: '10rem', flexShrink: 0 }} />
          <div className="card-body d-flex flex-column" style={{ flex: '1 1 auto' }}>
            <h5 className="card-title">MySQL</h5>
            <p className="card-text flex-grow-1">
              É um sistema de gerenciamento de banco de dados relacional amplamente utilizado para armazenamento e gerenciamento de dados.
            </p>
          </div>
        </div>

      </div>
    </div>


  );
};

export default Tecnologias;
