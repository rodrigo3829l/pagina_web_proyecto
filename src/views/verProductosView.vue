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
            <th>Descripcion</th>
            <th>Aroma</th>
            <th>Existencia</th>
            <th>Tipo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto._id">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>{{ producto.aroma }}</td>
            <td>{{ producto.existencia }}</td>
            <td>{{ producto.tipo }}</td>
            <td><button class="btn btn-warning">Editar</button></td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success"  @click="addProduct">Agregar productos</button>
    </div>
  </template>
  <script setup>
import {api} from '../axios/axios.js'
  import { RouterLink, useRouter } from "vue-router";
  import axios from "axios";
  import { ref } from "vue";

  const router = useRouter()
  const addProduct = () =>{
    router.push('/addProduct')
  }
  const productos = ref({});
  const getData = async () => {
    try {
      const { data } = await api.get(
        "/productos/"
      );
      productos.value = data.getProductos;
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