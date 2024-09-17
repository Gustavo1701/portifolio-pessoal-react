import React from 'react'



const Contatos = () => {

  function gerarEmail() {

    const nome = document.getElementById("nomeContato").value;
    const telefone = document.getElementById("telefoneContato").value;
    const email = document.getElementById("emailContato").value;
    const mensagem = document.getElementById("mensagemContato").value;

    alert("Mensagem enviada. Retornaremos em breve, obrigado!");


  }

  return (
    <>
      <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <div className="p-3 text-primary-emphasis bg-dark border border-primary-subtle rounded-3" data-bs-theme="dark" style={{ width: '600px', height: '550px' }}>
          <h1 className="text-center">Fale conosco</h1>
          <div className="mb-3">
            <label htmlFor="nomeContato" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nomeContato" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefoneContato" className="form-label">Telefone</label>
            <input type="text" className="form-control" id="telefoneContato" placeholder="(99) 9 9999 9999" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailContato" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailContato" placeholder="nome@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagemContato" className="form-label">Digite sua Mensagem</label>
            <textarea className="form-control" id="mensagemContato" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-primary" id='enviarEmail' onClick={gerarEmail}>Enviar</button>
        </div>
      </div>

    </>
  )
}

export default Contatos