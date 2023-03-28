<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              Información del Usuario
            </div>
            <div class="card-body">
              <div class="text-center mb-3">
                <img v-if="usuario.img.secure_url" :src="usuario.img.secure_url" alt="Imagen de Perfil" class="" style="width: 100px; border-radius: 16px;">
                <img v-else src="../components/img/como_hacer_jabones_artesanales_naturales_de_hierbas_1136_orig.jpg" alt="Imagen de Perfil" class="" style="width: 100px; border-radius: 16px;">
              </div>
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" :value="usuario.name" disabled>
              </div>
              <div class="form-group">
                <label for="apellidos">Apellidos:</label>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" id="apellidos" :value="usuario.app" disabled>
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="apellidos" :value="usuario.apm" disabled>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="usuario">Nombre de Usuario:</label>
                <input type="text" class="form-control" id="usuario" :value="usuario.userName" disabled>
              </div>
              <div class="form-group">
                <label for="correo">Correo Electrónico:</label>
                <input type="email" class="form-control" id="correo" :value="usuario.email" disabled>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 mb-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              Compras Realizadas
            </div>
            <div class="card-body" v-for="venta in ventas" >
              <div class="row mb-3" >
                <div class="col-md-2">
                  <img v-if="venta.estado === 'Entregado'" src="../components/img/ventas.png" alt="Imagen del Paquete" class="img-fluid">
                  <img v-else src="../components/img/entrega-gratis.png" alt="Imagen del Paquete" class="img-fluid">
                </div>
                <div class="col-md-10" >
                  <div class="column" v-for="(paquete, index) in venta.paquetes" :key="index">
                    <h5 class="mb-0" style="display: inline">{{ paquete.paquete }}</h5>
                    <span v-if="index !== venta.paquetes.length - 1">, </span>
                  </div>
                  <p class="mb-1">Total: $ {{ venta.total }}</p>
                  <p class="mb-1">Encargado: {{ venta.encargadoEntrega }}</p>
                  <p class="mb-1">Hora de la compra: {{ venta.hora }}</p>
                  <p class="mb-0">Fecha de Compra: {{ venta.fecha }}</p>
                  <p class="mb-0">Estado de la Compra: {{ venta.estado }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

    <script setup>

        import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
        import { useUserStore } from '../../store/user-store.js';
import { api } from '../axios/axios';
        const userStore = useUserStore();
        const router = useRouter();
        const usuario = ref('')
        const ventas = ref({});

        const getData = async () =>{
          const options = {
          headers: {
            'Authorization': `Bearer ${userStore.token}` // Agregamos el encabezado de autorización con el token
          }
          };
          try {
            const {data} = await api.get(`/auth/protected/`, options);
            const datos = await api.get(`/auth/${data._id}`);
            usuario.value = datos.data.user
            const userCompras = await api.get(`ventas/userid/${data._id}`)
            console.log(userCompras.data.ventas)
            ventas.value = userCompras.data.ventas,
            console.log(ventas)
          }catch(error){
            console.log(error)
          }
        }
          
        getData()
    </script>

  