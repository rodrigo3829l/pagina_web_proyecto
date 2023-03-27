<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <form>
            <h2 class="text-center mb-4">Contáctanos</h2>
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" name="name" placeholder="Escriba su nombre" pattern="[a-zA-Z_]{4,20}" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Escriba su correo electrónico" required>
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Asunto</label>
              <input type="text" class="form-control" id="subject" name="subject" placeholder="Escriba el asunto de su mensaje" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea class="form-control" id="message" name="message" rows="5" placeholder="Escriba aquí su mensaje" required></textarea>
            </div>
            <button type="submit" class="btn btn-success w-100">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </template>

<style>
  body {
    background-color: #f8f9fa;
  }

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #212529;
  }

  form {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .form-label {
    font-weight: 500;
  }

  .btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0b5ed7;
  }
</style>
