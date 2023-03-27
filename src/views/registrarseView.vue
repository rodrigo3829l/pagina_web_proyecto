<template>
    <div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-12">
      <h3 class="text-center mb-5">Añadir Usuario</h3>
      <form>
        <div class="row mb-3">
          <div class="col-md-6 mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" id="nombre" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="apellido-paterno" class="form-label">Apellido paterno</label>
            <input type="text" id="apellido-paterno" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="apellido-materno" class="form-label">Apellido materno</label>
            <input type="text" id="apellido-materno" class="form-control" required>
          </div>
          
          <div class="col-md-6 mb-3">
            <label for="nombre-usuario" class="form-label">Nombre de usuario</label>
            <input type="text" id="nombre-usuario" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="contrasena" class="form-label">Contraseña</label>
            <input type="password" id="contrasena" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="img" class="form-label">Foto de perfil</label>
            <input type="file" id="img" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
              <label for="pregunta" class="form-label">Pregunta secreta</label>
              <select id="pregunta" class="form-select" required>
                  <option value="">Seleccione una opción</option>
                  <option value="¿Cual es tu color favorito?">¿Cual es tu color favorito?</option>
                  <option value="¿Cuál es el nombre de tu mascota">¿Cuál es el nombre de tu mascota?</option>
                  <option value="¿Cuál es tu película favorita?">¿Cuál es tu película favorita?</option>
                  <option value="¿Cual es tu profesor favorito?">¿Cual es tu profesor favorito?</option>
                </select>
            </div>
            <div class="col-md-6 mb-3">
                <label for="respuesta" class="form-label">Respuesta</label>
                <input type="text" id="respuesta" class="form-control" required>
            </div>
            <div class="col-md-12 text-center">
              
                <button type="button" @click="addUser" class="btn btn-success">Agregar usuario</button>
            </div>
        </div>
    </form>
</div>

  </div>
</div>

</template>

<script setup>
import {api} from '../axios/axios.js'
    import { useRouter, useRoute } from 'vue-router';
    import axios from 'axios';
    import { ref } from 'vue';

    const route = useRoute();
    const router = useRouter();

    const addUser = async () =>{
    const datos = {
        name:  document.querySelector("#nombre").value,
        app :  document.querySelector("#apellido-paterno").value,
        apm :  document.querySelector("#apellido-materno").value, 
        userName :  document.querySelector("#nombre-usuario").value, 
        password :  document.querySelector("#contrasena").value, 
        email :  document.querySelector("#email").value, 
        pregunta :  document.querySelector("#pregunta").value, 
        respuesta :  document.querySelector("#respuesta").value, 
        img : document.querySelector("#img").files[0], 
        tipo :"User"
    }
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'multipatformdata': true
        }
    }
    try {
        console.log(datos)
        const newUser = await api.post('/auth/registerUser', datos, config);
        console.log(newUser.data)
        alert('Creado con exito');
        router.push('/');
    } catch (error) {
        console.log(error)
    }

}

</script>

<style>
.container {
  max-width: 800px;
}

.form-label {
  font-weight: bold;
}

.input-group {
  display: flex;
}

.input-group .form-control {
  border-radius: 0;
}

.input-group .btn {
  border-radius: 0 0.25rem 0.25rem 0;
}



.select2-container--default .select2-selection--single {
  border: 1px solid #ced4da;
  border-radius: 0;
  height: calc(2.75rem + 2px);
  line-height: 1.5;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
}

.select2-container--default .select2-selection--single:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control:disabled, .form-control[readonly] {
  background-color: #f2f2f2;
}

</style>