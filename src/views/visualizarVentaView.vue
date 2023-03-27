<template>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <img class="card-img-top" src="../components/img/como_hacer_jabones_artesanales_naturales_de_hierbas_1136_orig.jpg" alt="Imagen de venta">
            <div class="card-body">
              <h5 class="card-title">Venta #{{ venta._id }}</h5>
              <p class="card-text">Fecha: {{ venta.fecha }}</p>
              <p class="card-text">Hora: {{ venta.hora }}</p>
              <p class="card-text">Total: ${{ venta.total }}</p>
              <p class="card-text">Estado: {{ venta.estado }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4" v-for="paquete in venta.paquetes" >
            <div class="card-body">
              <h5 class="card-title">Paquete</h5>
              <p class="card-text">Nombre: {{ paquete.paquete }}</p>
              <p class="card-text">Cantidad: {{ paquete.cantidad }}</p>
              <p class="card-text">Total: ${{ paquete.total }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Usuario</h5>
              <p class="card-text">Nombre: {{ venta.usuario }}</p>
              <i class="fas fa-user fa-3x"></i>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Encargado de entrega</h5>
              <p class="card-text">Nombre: {{ venta.encargadoEntrega }}</p>
              <i class="fas fa-user fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div><br>
  </template>

    <script setup>
import {api} from '../axios/axios.js'
       import { useRouter, useRoute } from 'vue-router';
        import axios from 'axios';
        import { ref } from 'vue';

        const route = useRoute();
        const router = useRouter()
        const venta = ref({});
        const paquete = ref({});

        const getData = async () =>{
            try {
                const {data} =await api.get(`/ventas/${route.params.id}`);
                console.log(data._id)
                venta.value = data;
            } catch (error) {
                console.log(error)
            }
        }
        getData();

        
    </script>
  
  <style>
  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    border-radius: 10px 10px 0 0;
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0;
  }
  
  .card-text {
    margin-bottom: 0.5rem;
  }
  
  .fa-user {
    color: #28a745;
  }
  </style>
  