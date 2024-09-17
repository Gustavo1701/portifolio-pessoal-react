import React from 'react';
import fotoPerfil from '../assets/img/home/fotoperfil.jpg';
import bolinhas from '../assets/img/home/bolinhas.svg';

const Home = () => {
    return (
        <div className="content align-items-center justify-content-center p-2 d-flex container text-primary-emphasis bg-dark border border-primary rounded-3 mt-3 mb-3" style={{
            gap: 50, 
            }}>
            
            <div className="container p-1 text-primary-emphasis bg-dark border border-primary-subtle rounded-3" data-bs-theme="dark" style={{
                
                width: '50%',
                height: '50%'
                }}>
                <h2>Bem vindo ao meu protifólio pessoal.</h2><br />
                <h3>Meu nome é Gustavo,</h3>
                <p>Sou Desenvolvedor Fullstack em formação.</p><br />
                <p>
                    Sou formado em Análise e Desenvolvimento de Sistemas,<br/> curso pós-graduação em Engenharia de Software e faço Programação FullStack.
                </p>
            </div>

            <div className="container p-3 text-primary-emphasis bg-dark" data-bs-theme="dark" style={{
                
                width: '50%',
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                <img src={bolinhas} className="card-img-top" alt="Bolinha Inferior Esquerdo" style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '160px',
                    height: '160px',
                    zIndex: '0'
                }} />
                <img src={fotoPerfil} className="card-img-top" alt="Foto Perfil" style={{
                    borderRadius: '50%',
                    zIndex: '1',
                    maxWidth: '300px'
                }} />
                <img src={bolinhas} className="card-img-top" alt="Bolinha Superior Direito" style={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    width: '160px',
                    height: '160px',
                    zIndex: '0'
                }} />
            </div>

        </div>
    );
}

export default Home;
