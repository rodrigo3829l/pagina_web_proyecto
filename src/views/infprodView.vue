<template>
    <div>
      <div class="container-fluid py-5 bg-light">
        <div class="container">
          <h1 class="text-center mb-5">Productos de los paquetes</h1>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="cont" >
            <div v-for="producto in productos">
                <div class="col" >
                    <div class="card h-100">
                     <img :src="producto.img.secure_url" class="card-img-top" alt="">
                     <div class="card-body">
                       <h3 class="card-title">{{ producto.nombre }}</h3>
                       <p class="card-text">{{ producto.descripcion }}</p>
                       <p class="card-text">Aroma: {{ producto.aroma }}</p>
                       <p class="card-text">Tipo: {{ producto.tipo }}</p>
                        <h4 class="card-subtitle mb-3">Disponibles: {{ producto.existencia }}</h4>
                     </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
import {api} from '../axios/axios.js'
    import { RouterLink } from 'vue-router';
    import axios from 'axios';
    import { ref } from 'vue';

    const productos = ref({});
    const getData = async () =>{
        try {
            const {data} = await api.get('/productos/');
            console.log(data.getProductos)
            productos.value = data.getProductos;
        } catch (error) {
            console.log(error)
        }
    }
    getData();
  </script>
  
  <style>
    .card {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
      transition: all 400ms ease-out;
    }
  
    .card:hover {
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
      transform: translateY(-3%);
    }
  
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
  
    .bg-dark {
      color: #fff;
    }
  </style>
  