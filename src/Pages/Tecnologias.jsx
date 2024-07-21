import React from 'react'
import { Link } from 'react-router-dom'
import logoReact from '../assets/img/tecnologias/react.png'
import logoNode from '../assets/img/tecnologias/node.png'
import logoJava from '../assets/img/tecnologias/java.png'
import logoHtml from '../assets/img/tecnologias/html-css-js.png'

const Tecnologias = () => {
  return (
    <>
      <div className="position-absolute w-100">
        <div className="container-fluid d-flex align-items-center justify-content-center gap-3 p-3">
          <div className="card bg-dark" data-bs-theme="dark" style={{ width: "18rem" }}>
            <img src={logoReact} className="card-img-top" alt="react" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='#' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
          <div className="card bg-dark" data-bs-theme="dark" style={{ width: "18rem" }}>
            <img src={logoNode} className="card-img-top" alt="node.js" />
            <div className="card-body">
              <h5 className="card-title">Node.js</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='#' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
          <div className="card bg-dark" data-bs-theme="dark" style={{ width: "18rem" }}>
            <img src={logoJava} className="card-img-top" alt="Java" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='#' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
          <div className="card bg-dark" data-bs-theme="dark" style={{ width: "18rem" }}>
            <img src={logoHtml} className="card-img-top" alt="html css javascript" />
            <div className="card-body">
              <h5 className="card-title">HTML CSS JS</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='#' className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Tecnologias