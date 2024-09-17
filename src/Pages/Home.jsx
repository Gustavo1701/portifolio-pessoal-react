import React from 'react';
import fotoPerfil from '../assets/img/home/fotoperfil.jpg';
import bolinhas from '../assets/img/home/bolinhas.svg';

const Home = () => {
    return (
        <div className="align-items-center justify-content-center p-2 d-flex container text-primary-emphasis bg-dark border border-primary-subtle rounded-3" style={{
            gap: 50, 
            marginBottom:'35px', 
            marginTop:'35px'}}>
            
            <div className="container p-2 text-primary-emphasis bg-dark border border-primary-subtle rounded-3" data-bs-theme="dark" style={{
                
                width: '50%',
                height: '50%'
                }}>
                <h1>Meu nome é Gustavo,<br /></h1>
                <p>Sou Desenvolvedor Web Fullstack</p><br />
                <p>
                    Sou formado em Análise e Desenvolvimento de Sistemas, curso pós em Engenharia de Software e faço Programação FullStack na Dital College.
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
