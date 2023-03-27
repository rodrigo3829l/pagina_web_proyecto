<script setup>
import {api} from '../axios/axios.js'
     import { useRouter, useRoute } from 'vue-router';
    import axios from 'axios';
    import { ref } from 'vue';

    const route = useRoute();
    const router = useRouter()

    const users = ref ({});
    const getUsers = async () => {
        const {data} = await api.get('/auth/users');
        console.log(data.users)
        users.value = data.users;
    }

    getUsers();

    const back = () =>{
        router.push('/verEncargados');
    }
    const addEnca = async () => {
    const data = {
       idUsuario : document.querySelector("#usuario").value

    };
    console.log(data)

    const response = await api.post('/encargados', data);
    console.log(response.data);
    router.push({ path: '/verEncargados', query: { paqueteAgregado: true } });

};

</script>

<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h3 class="text-center mb-5">Añadir Paquetes</h3>
          <form>
              <div class="mb-3">
                    <label for="usuario" class="form-label">Usuarios</label>
                    <select id="jabon" class="form-select" required>
                        <option value=""   >Seleccione una opción</option >
                            <option v-for="user in users" :value="user._id">{{ user.tipo }}</option>
                    </select>
                    <!-- <div class="invalid-feedback">Debe seleccionar una opción</div> -->
                </div>
            <button type="submit" class="btn btn-success btn-block mt-3" @click="addEnca">Agregar encargado</button>
            <button type="submit" class="btn btn-danger btn-block mt-3" @click="back">Regresar</button>
          </form>
        </div>
      </div>
    </div>
  </template>


  <style>
    /* Estilos para el formulario */

/* Estilos para el título del formulario */
.form-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Estilos para los campos del formulario */
.form-label {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-control {
  font-size: 1rem;
}

/* Estilos para el botón del formulario */
.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 2rem;
}

.btn-success:hover {
  background-color: #882121;
  border-color: #7e1e1e;
}
.btn-danger {
  background-color: #a72828;
  border-color: #a72828;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 2rem;
}

.btn-danger:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
/* Estilos para las validaciones de los campos */
.invalid-feedback {
  font-size: 0.875rem;
  display: block;
}

.is-invalid {
  border-color: #dc3545 !important;
}

/* Estilos para la página en general */

.container {
  max-width: 60%;
  margin: 0 auto;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

</style>    