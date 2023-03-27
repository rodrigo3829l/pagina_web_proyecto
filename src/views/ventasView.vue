<template>
    <div>
      <div class="container-fluid py-5 bg-light">
        <div class="container">
          <h1 class="text-center mb-5">Paquetes de productos de origen natural</h1>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="cont" >
            <div v-for="paque in paquetes">
                <div class="col" >
                    <div class="card h-100">
                     <img v-if="paque.img" :src="`${paque.img.secure_url}`" class="card-img-top" alt="">
                     <img v-else src="../components/img/como_hacer_jabones_artesanales_naturales_de_hierbas_1136_orig.jpg" class="card-img-top" alt="">
                     <div class="card-body">
                       <h3 class="card-title">{{ paque.nombre }}</h3>
                       <p class="card-text">{{ paque.descripcion }}</p>
                        <h4 class="card-subtitle mb-3">Existencia {{ paque.existencia }}</h4>
                        <h4 class="card-subtitle mb-3">Precio $ {{ paque.precio }}</h4>
                        <RouterLink :to="`ventas/${paque._id}`"><button class="btn btn-success">Comprar</button></RouterLink>
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

    const paquetes = ref({});
    const getData = async () =>{
        try {
            const {data} = await api.get('/paquetes/');
            //console.log(data.getPaquetes)
            console.log(data.getPaquetes)
            paquetes.value = data.getPaquetes;
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
  