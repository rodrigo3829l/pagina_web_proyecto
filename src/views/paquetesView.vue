<template>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-3">
            <img v-if="paquete.img" :src="`${paquete.img.secure_url}`" alt="" class="card-img-top">
            <img v-else src="../components/img/como_hacer_jabones_artesanales_naturales_de_hierbas_1136_orig.jpg" alt="" class="card-img-top">
            <div class="card-body">
              <h1 hidden id="id" class="card-title">{{paquete._id}}</h1>
              <h1 class="card-title">{{paquete.nombre}}</h1>
              <h2 class="card-subtitle mb-2 text-muted">$ {{ paquete.precio }}</h2>
              <hr>
              <h4>contenido</h4>
              <p>{{ paquete.productos[0]}}</p>
              <p>{{ paquete.productos[1]}}</p>
              <hr>
              <p class="card-text">{{ paquete.descripcion}}</p>
              <hr>
              <h4 class="card-text">Seleccione la cantidad:</h4>
              <div class="form-group">
                <select class="form-control" id="cantidad">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <button type="button" class="btn btn-success mr-2" @click="agregarCarrito">Agregar al carrito</button>
            </div>
          </div>
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

    const paquete = ref({});
    const getData = async () =>{
        try {
            const {data} = await api.get(`/paquetes/${route.params.id}`);
            //console.log(data.getPaquete.productos[0])
            paquete.value = data.getPaquete;
            //console.log(data.getPaquete)
        } catch (error) {
            console.log(error)
        }
    }
    getData();

    const agregarCarrito = () =>{
      try {
        const arregloString = localStorage.getItem('venta');
        let arreglo = [];

        if (arregloString !== null) {
          arreglo = JSON.parse(arregloString);
        }
        if (paquete.value && paquete.value._id) {
          arreglo.push({ idPaquete : paquete.value._id, cantidad : Number(document.querySelector("#cantidad").value) });
        }
        const arregloActualizadoString = JSON.stringify(arreglo);
        localStorage.setItem('venta', arregloActualizadoString);
        alert('producto agregado al carrito');
        console.log(localStorage.getItem('venta'))
      } catch (error) {
        console.log(error)
      }
    }

    
</script>
  
  <style>
  .card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .progress {
    height: 20px;
  }
  .progress-bar {
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
    color: #fff;
  }
  </style>
  