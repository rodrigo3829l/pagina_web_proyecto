<script setup>
import {api} from '../axios/axios.js'
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  import { ref } from 'vue';

  const route = useRoute();
  const router = useRouter()


  const change = async () =>{
    const newResp = document.querySelector("#pswd").value;
    const {data} = await api.get(`/auth/${route.params.id}`)
    const datos = {
        name : data.user.name,
        app : data.user.app,
        apm : data.user.apm,
        fechaNacimiento : data.user.fechaNacimiento,
        numCasa : data.user.numCasa,
        direccion : data.user.direccion,
        userName : data.user.userName,
        password : newResp,
        celphone : data.user.celphone, 
        email : data.user.email,
        sexo : data.user.sexo,
        pregunta : data.user.pregunta,
        respuesta : data.user.respuesta,
        img : data.user.img,
        tipo : data.user.tipo
    }
    const response = await api.patch(`/auth/${data.user._id}`, datos);
    console.log(response)
    alert('cambiado con exito');
    router.push('/login');
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
              <label for="pswd" class="form-label">Nueva contraseña</label>
              <input type="password" class="form-control" id="pswd" required>
            </div>
            <button type="button" @click="change" class="btn btn-success w-100">Recuperar</button>
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
  