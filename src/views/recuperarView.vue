<script setup>
import {api} from '../axios/axios.js'
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  import { ref } from 'vue';

  const route = useRoute();
  const router = useRouter()

  const consultar = async () =>{
    const user = document.querySelector("#username").value;
    const correo = document.querySelector("#email").value;
    const datos = {
      userName : user,
      email : correo
    }
    const response = await api.post('/auth/forget', datos);
    router.push(`/recuperar/${response.data.user._id}`)
  }
</script>
<template>
    <div class="container cont mt-5">
      <div class="card border-0 shadow">
        <div class="card-header bg-transparent text-center">
          <h2 class="mb-0">Recuperar contraseña</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="username" class="form-label">Usuario</label>
              <input type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Correo</label>
              <input type="email" class="form-control" id="email">
            </div>
            <button type="button" @click="consultar"  class="btn btn-success w-100">Recuperar</button>
          </form>
        </div>
      </div>
    </div><br>
  </template>
<style>
.cont {
  max-width: 400px;
}

h2 {
  margin-bottom: 30px;
}

.form-control:focus {
  border-color: #00b4db;
  box-shadow: 0 0 0 0.25rem rgba(0, 180, 219, 0.25);
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}
.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
.btn-success:focus, .btn-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}


.btn-success:active {
  background-color: #0077b6;
  border-color: #0077b6;
}
</style>
  