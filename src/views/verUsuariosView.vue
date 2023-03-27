<template>
    <div class="container py-5">
      <h3 class="text-center mb-5">Welcome:</h3>
        <div v-if="$route.query.addUser" class="alert alert-success" role="alert">
            Usuario agregado correctamente.
        </div>
        <div v-if="$route.query.updateUser" class="alert alert-success" role="alert">
            Usuario actualzado correctamente.
        </div>
      <table class="table table-bordered table-hover">
        <thead class="bg-success text-white">
          <tr>
            
            <th>Nombre</th>
            <th>Nombre de usuario</th>
            <th>Sexo</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>direccion</th>
            <th>Cp</th>
            <th>Tipo</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.name }}  {{ user.app }} {{ user.apm }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.sexo ? user.sexo : '...' }}</td>
            <td>{{ user.celphone ? user.celphone : '...' }}</td>
            <td>{{user.email}}</td>
            <td>{{ user.direccion[0].colonia ? user.direccion[0].colonia : '...' }} {{ user.direccion[0].calle ? user.direccion[0].calle : '...' }}, {{ user.direccion[0].ciudad ? user.direccion[0].ciudad : '...' }} {{ user.direccion[0].estado ? user.direccion[0].estado : '...' }}</td>
            <td>{{ user.direccion[0].cp ? user.direccion[0].cp : '...' }}</td>
            <td>{{ user.tipo }}</td>
            <RouterLink :to="`updateUser/${user._id}`">
              <td><button class="btn btn-warning">Actualizar</button></td>
            </RouterLink>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success" @click="addUser">Agregar Usuario</button>
    </div>
  </template>
  <script setup>
import {api} from '../axios/axios.js'
  import { RouterLink, useRouter } from "vue-router";
  import axios from "axios";
  import { ref } from "vue";

  const router = useRouter()
  const addUser = () =>{
    router.push('/addUser')
  }
  const users = ref({});
  const getData = async () => {
    try {
      const { data } = await api.get(
        "/auth/users/"
      );
      users.value = data.users;
      console.log(data.users)
    } catch (error) {
      console.log(error);
    }
  };
  getData();
  </script>
  <style>
  /*Header*/
  #main-header {
    background: #333;
    color: white;
    padding: 10px;
  }
  
  /* Table styles */
  table {
    font-size: 0.875rem;
    border-collapse: collapse;
  }
  
  table th,
  table td {
    font-weight: 400;
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
  }
  
  table th {
    background-color: #e9ecef;
    border-top-width: 0;
    white-space: nowrap;
  }
  
  table tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
  
  /* Button styles */
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
  
  .btn-warning {
    background-color: #ffc107;
    border-color: #ffc107;
  }
  
  .btn-warning:hover {
    background-color: #e0a800;
    border-color: #d39e00;
  }
  </style>
  