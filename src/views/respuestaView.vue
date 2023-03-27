<script setup>
import {api} from '../axios/axios.js'
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  import { ref } from 'vue';

  const route = useRoute();
  const router = useRouter()
    const user = ref({});
  const getAnswer = async () =>{
    const {data} = await api.get(`/auth/${route.params.id}`)
    console.log(data.user)
    user.value = data.user;
  }
  getAnswer()

  const comparar = async () =>{
    const resp = document.querySelector("#respuesta").value;
    const {data} = await api.get(`/auth/${route.params.id}`)
    console.log(data.user.respuesta)
    if ( data.user.respuesta != resp ){
        alert('no coincide')
    }else{
        router.push(`/recuperar/change/${data.user._id}`)
    }
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
              <label for="pregunta" class="form-label">pregunta</label>
              <input type="text" :value="`${user.pregunta}`" class="form-control" id="pregunta">
            </div>
            <div class="mb-3">
              <label for="respuesta" class="form-label">respuesta</label>
              <input type="text" class="form-control" id="respuesta">
            </div>
            <button type="button" @click="comparar"  class="btn btn-success w-100">Recuperar</button>
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
  