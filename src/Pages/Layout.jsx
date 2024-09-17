import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github-branquin.png'
import instagram from '../assets/img/instagram-colorido.png'
import whatsapp from '../assets/img/whatsapp.png'
import logo from '../assets/img/g.png'

function MenuNavegacao() {
    return (

        <nav id='navbar' className="navbar navbar-expand-lg text-primary-emphasis bg-dark border border-primary-subtle" data-bs-theme="dark">
            
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="mr-2" />
                    Gustavo Santos
                </Link>

                
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Sobre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tecnologias">
                                Tecnologias
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/repositorios">
                                Repositórios
                            </Link> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contatos">
                                Contatos
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
    );
}

function Rodape() {
    return (
        <>
            <div className="bottom-0 w-100 ">
                <div className="container-fluid d-flex align-items-center justify-content-center gap-4 bg-dark w-100 p-3">
                    <Link className="navbar-brand" to="https://www.linkedin.com/in/gustavo-santos-1701jr/" target='blank_'>
                        <img src={linkedin} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    </Link>
                    <Link className="navbar-brand" to="https://github.com/Gustavo1701" target='blank_'>
                        <img src={github} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    </Link>
                    <Link className="navbar-brand" to="https://instagram.com/gustavo_santos_17" target='blank_'>
                        <img src={instagram} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />

                    </Link>
                    <Link className="navbar-brand" to="https://api.whatsapp.com/send?phone=+5588998044971&text=Ol%C3%A1%2C" target='blank_'>
                        <img src={whatsapp} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />

                    </Link>
                </div>
            </div>

        </>
    )
}

const Layout = () => {
    return (
        <>
            <MenuNavegacao />
            <Outlet />
            <Rodape />
        </>
    )
}

export default Layout