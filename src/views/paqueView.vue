<template>
    <div class="container py-5">
      <h3 class="text-center mb-5">Welcome:</h3>
        <div v-if="$route.query.paqueteAgregado" class="alert alert-success" role="alert">
            Paquete agregado correctamente.
        </div>
        <div v-if="$route.query.paqueteActualizado" class="alert alert-success" role="alert">
            Paquete actualzado correctamente.
        </div>
      <table class="table table-bordered table-hover">
        <thead class="bg-success text-white">
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Descripcion</th>
            <th>Produtos</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paque in paquetes" :key="paque._id">
            <td>{{ paque.nombre }}</td>
            <td>{{ paque.precio }}</td>
            <td>{{ paque.existencia }}</td>
            <td>{{ paque.descripcion }}</td>
            <td>{{ paque.productos[0] }} y {{ paque.productos[1] }}</td>
            <td>
              <RouterLink :to="`paque/${paque._id}`">
                <button class="btn btn-warning">Editar</button>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success"  @click="addPaque">Agregar paquetes</button>
    </div>
  </template>
  <script setup>
import {api} from '../axios/axios.js'
  import { RouterLink, useRouter } from "vue-router";
  import axios from "axios";
  import { ref } from "vue";

  const router = useRouter()
  const addPaque = () =>{
    router.push('/addPaque')
  }
  const paquetes = ref({});
  const getData = async () => {
    try {
      const { data } = await api.get(
        "/paquetes/"
      );
      paquetes.value = data.getPaquetes;
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