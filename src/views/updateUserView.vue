<template>
    <div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-12">
      <h3 class="text-center mb-5">Actualizar Usuario</h3>
      <form>
        <div class="row mb-3">
          <div class="col-md-6 mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" :value="user.name" id="nombre" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="apellido-paterno" class="form-label">Apellido paterno</label>
            <input type="text" :value="user.app" id="apellido-paterno" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="apellido-materno" class="form-label">Apellido materno</label>
            <input type="text" :value="user.apm" id="apellido-materno" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="fecha-nacimiento" class="form-label">Fecha de nacimiento</label>
            <input type="date"  id="fecha-nacimiento" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="nombre-usuario" class="form-label">Nombre de usuario</label>
            <input type="text" :value="user.userName" id="nombre-usuario" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="nombre-usuario" class="form-label">Contraseña</label>
            <input type="password"  id="contrasena" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="telefono" class="form-label">Teléfono</label>
            <input v-if="user.celphone !== null" type="number" :value="user.celphone" id="telefono" class="form-control" required>
            <input v-else type="number" id="telefono" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" :value="user.email" id="email" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="numero-casa" class="form-label">Número de casa</label>
            <input v-if="user.numCasa !== null" type="number" :value="user.numCasa" id="numero-casa" class="form-control" required>
            <input v-else type="number" id="numero-casa" class="form-control" required>
        </div>
        <div class="col-md-6 mb-3">
            <label for="sexo" class="form-label">Sexo</label>
            <select id="sexo" class="form-select" required>
              <option v-if="user.sexo !== null" :value="user.sexo">Seleccione una opción</option>
              <option v-else value="">Seleccione una opción</option>
              <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
        </div>
          <div class="col-md-6 mb-3">
              <label for="pregunta" class="form-label">Pregunta secreta</label>
              <select id="pregunta" class="form-select" required>
                  <option :value="user.pregunta">Seleccione una opción</option>
                  <option value="¿Cual es tu color favorito?">¿Cual es tu color favorito?</option>
                  <option value="¿Cuál es el nombre de tu mascota">¿Cuál es el nombre de tu mascota?</option>
                  <option value="¿Cuál es tu película favorita?">¿Cuál es tu película favorita?</option>
                  <option value="¿Cual es tu profesor favorito?">¿Cual es tu profesor favorito?</option>
                </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="respuesta" class="form-label">Respuesta</label>
              <input type="text" 
                    v-if="user.respuesta !== null" 
                    :value="user.respuesta" 
                    id="respuesta" 
                    class="form-control" 
                    required>
              <input type="text" 
                    v-else 
                    id="respuesta" 
                    class="form-control" 
                    required>
            </div>
            <div class="col-md-6 mb-3">
                <label for="tipo-usuario" class="form-label">Tipo de usuario</label>
                <select id="tipo-usuario" class="form-select" required>
                    <option v-if="user.tipo !== null" :value="user.tipo">Seleccione una opcion</option>
                    <option v-else velue="">Seleccione una opcion</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Gerent">Gerente</option>
                    <option value="Reparter">Repartidor</option>
                </select>
            </div>
            <div class="col-md-6 mb-3">
                <label for="codigo-postal" class="form-label">Código postal</label>
                <div class="input-group">
                    <input v-if="user.direccion[0].cp !== null" type="number" :value="user.direccion[0].cp"  id="codigo-postal" class="form-control" required>
                    <input v-else type="number" id="codigo-postal" class="form-control" required>
                    <button class="btn btn-success" @click="getDataForCp" type="button">Buscar</button>
                </div>
            </div>
           
            <div class="col-md-6 mb-3">
                <label for="estado" class="form-label">Estado</label>
                <input type="text" 
                v-if="direcciones.estado !== undefined"
                :value="direcciones.estado"
                id="estado" 
                class="form-control" 
                required
                >

                <input type="text" 
                v-else-if="user.direccion[0].estado !== null"
                :value="user.direccion[0].estado"
                id="estado" 
                class="form-control" 
                required
                >

                <input type="text" 
                v-else
                :value="user.direccion[0].estado"
                id="estado" 
                class="form-control" 
                required
                >

            </div>

            <div class="col-md-6 mb-3">
                <label for="ciudad" class="form-label">Ciudad</label>
                <input type="text" 
                v-if="direcciones.ciudad !== undefined"
                :value="direcciones.ciudad"
                id="ciudad" 
                class="form-control" 
                required
                >

                <input type="text" 
                v-else-if="user.direccion[0].ciudad !== null"
                :value="user.direccion[0].ciudad"
                id="ciudad" 
                class="form-control" 
                required
                >

                <input type="text" 
                v-else
                :value="user.direccion[0].ciudad"
                id="ciudad" 
                class="form-control" 
                required
                >
            </div>
            <div class="col-md-6 mb-3">
                <label for="colonia" class="form-label">Colonia</label>
                <select id="colonia"  class="form-select" required>
                    <option v-if="user.direccion[0].colonia !== null" :value="user.direccion[0].colonia">{{ user.direccion[0].colonia  }}</option>
                    <option v-else >Seleccione una colona</option>
                    <option v-for="colonia in direcciones.asentamiento" :value="colonia">{{ colonia }}</option>
                </select>
            </div>
            <div class="col-md-6 mb-3">
                <label for="calle" class="form-label">Calle</label>
                <input type="text" :value="user.direccion[0].calle" id="calle" class="form-control" required>
            </div>
            
            <div class="col-md-12 text-center">
                <button type="button" @click="updateUser" class="btn btn-success">Actualizar usuario</button>
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
    const direcciones = ref ({});
    const colonias = ref({})
    const token = 'pruebas';
    //const token = '8bf065ac-b456-454d-b9e2-e6f5cc8b4747';
    const getDataForCp = async () =>{
        const cp = document.querySelector("#codigo-postal").value;
        try {
           const {data} = await api.get(`https://api.copomex.com/query/info_cp/${cp}?type=simplified&token=${token}`)
           console.log(data) 
           direcciones.value = data.response;
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async () =>{
        const datos = {
            name:  document.querySelector("#nombre").value,
            app :  document.querySelector("#apellido-paterno").value,
            apm :  document.querySelector("#apellido-materno").value, 
            fechaNacimiento :  document.querySelector("#fecha-nacimiento").value, 
            numCasa :  document.querySelector("#numero-casa").value,
            direccion : [
                {
                    calle :  document.querySelector("#calle").value,
                    colonia :  document.querySelector("#colonia").value,
                    ciudad :  document.querySelector("#ciudad").value,
                    estado :  document.querySelector("#estado").value,
                    cp :  document.querySelector("#codigo-postal").value
                }
            ], 
            userName :  document.querySelector("#nombre-usuario").value, 
            password :  document.querySelector("#contrasena").value, 
            celphone :  document.querySelector("#telefono").value, 
            email :  document.querySelector("#email").value, 
            sexo :  document.querySelector("#sexo").value, 
            pregunta :  document.querySelector("#pregunta").value, 
            respuesta :  document.querySelector("#respuesta").value, 
            img :  'prueba de img', 
            tipo : document.querySelector("#tipo-usuario").value
        }
        try {
          console.log(datos)
            const newUser = await api.patch(`/auth/${route.params.id}`, datos);
            console.log(newUser.data)
            // alert('Actualizado con exito');
            router.push({ path: '/verUsers', query: { updateUser: true } });
            
        } catch (error) {
            console.log(error)
        }

    }
    const user = ref({});

    const getUser = async () =>{
    const {data} = await api.get(`/auth/${route.params.id}`)
    console.log(data.user)
    user.value = data.user;
    }
    getUser()
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