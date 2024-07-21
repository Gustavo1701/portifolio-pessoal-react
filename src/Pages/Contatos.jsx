import React from 'react'


const Contatos = () => {
  return (
    <>
      <div className="position-absolute w-100">
        <div className="align-items-center justify-content-center p-3">
          <div class="p-3 text-primary-emphasis bg-dark border border-primary-subtle rounded-3" data-bs-theme="dark">
            <div class="mb-3 ">
              <label for="exampleFormControlInput1" class="form-label"> Digite seu Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Digite sua mensagem</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contatos