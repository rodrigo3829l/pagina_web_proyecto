<!-- <template>
    <div class="container py-5">
      <h3 class="text-center mb-5">Welcome:</h3>
      <table class="table table-bordered">
        <thead class="bg-success text-white">
          <tr >
            <th>ID</th>
            <th>fecha</th>
            <th>Hora</th>
            <th>usuario</th>
            <th>total</th>
            <th>Encargado de la entrega</th>
            <th>Estado</th>
            <th>Actualizar</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody id="cont">            
        </tbody>
      </table>
    </div>
  </template>
<script>
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    import 'animate.css/animate.min.css'

    import axios from 'axios';
    const ventas = () =>{
        api.get('/ventas/')
        .then(r => {
            let data = "";
            let i;
            for (i = 0 ; i < r.data.getventas.length ; i++){
                data = data + `<tr>
            <td>${r.data.getventas[i]._id}</td>
            <td>${r.data.getventas[i].fecha}</td>
            <td>${r.data.getventas[i].hora}</td>
            <td>${r.data.getventas[i].usuario}</td>
            <td>${r.data.getventas[i].total}</td>
            <td>${r.data.getventas[i].encargadoEntrega}</td>
            <td>${r.data.getventas[i].estado}</td>
            <td><button class="btn btn-success">Actualizar</button></td>
            <td><button class="btn btn-danger">Visualizar</button></td>
            </tr>
                `
            }
            document.querySelector("#cont").innerHTML=data
        }).catch(error => {
            console.log(error)
        })
    }
    ventas();

</script>
 -->

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
            <th>fecha</th>
            <th>Hora</th>
            <th>usuario</th>
            <th>total</th>
            <th>Encargado de la entrega</th>
            <th>Estado</th>
            <th>Actualizar</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="venta in ventas" :key="venta._id">
            <td>{{ venta.fecha }}</td>
            <td>{{ venta.hora }}</td>
            <td>{{ venta.usuario }}</td>
            <td>{{ venta.total }}</td>
            <td>{{ venta.encargadoEntrega }}</td>
            <td>{{ venta.estado }}</td>
            <td><button @click="update(venta._id)" type="submit" class="btn btn-success">Actualizar</button></td>
            <td>
                <RouterLink :to="`getVentas/${venta._id}`">
                    <button class="btn btn-warning">Visualizar</button>
                </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
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
  const ventas = ref({});
  const getData = async () => {
    try {
      const { data } = await api.get(
        "/ventas/"
      );
      ventas.value = data.getventas;
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  const update = async (idVenta) =>{
        const datos = {
            id: idVenta
        }
            try {
                const {data} = api.post(`/ventas/update`, datos);
                console.log(data)
                alert("Actualizada con exito")
            } catch (error) {
                console.log(error)
            }
        }
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