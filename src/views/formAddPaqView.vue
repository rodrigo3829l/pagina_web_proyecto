<script setup>
import {api} from '../axios/axios.js'
     import { useRouter, useRoute } from 'vue-router';
    import axios from 'axios';
    import { ref } from 'vue';

    const route = useRoute();
    const router = useRouter()

    const productos = ref ({});
    const getProducts = async () => {
        const {data} = await api.get('/productos');
        console.log(data.getProductos)
        productos.value = data.getProductos;
    }

    getProducts();

    const back = () =>{
        router.push('/paque');
    }
    const addPaquete = async () => {
    const data = {
        nombre: document.querySelector("#nombre").value,
        descripcion: document.querySelector("#descripcion").value,
        precio: document.querySelector("#precio").value,
        img: document.querySelector("#img").files[0],
        productos: [{
                id_producto : document.querySelector("#jabon").value
            },
            {
                id_producto:document.querySelector("#desodorante").value
            }
        ],
        existencia: document.querySelector("#existencia").value,
    };
    //console.log(data)
    const response = await api.post('/paquetes', data);
    console.log(response.data);
    router.push({ path: '/paque', query: { paqueteAgregado: true } });

};

</script>

<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h3 class="text-center mb-5">Añadir Paquetes</h3>
          <form>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" id="nombre" class="form-control" required>
              <!-- <div class="invalid-feedback">El nombre es requerido</div> -->
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripción</label>
              <textarea id="descripcion" class="form-control" required></textarea>
              <!-- <div class="invalid-feedback">La descripción es requerida</div> -->
            </div>
            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="number" id="precio" class="form-control" required>
                <!-- <div class="invalid-feedback">El precio es requerido</div> -->
              </div>
            </div>
            <div class="mb-3">
              <label for="img" class="form-label">Imagen</label>
              <input type="file" id="img" class="form-control" required>
              <!-- <div class="invalid-feedback">La imagen es requerida</div> -->
            </div>
            <div class="mb-3">
              <label for="jabon" class="form-label">Jabón</label>
              <select id="jabon" class="form-select" required>
                <option value="">Seleccione una opción</option>
                <option v-for="jabon in productos"  :value="`${jabon._id}`">{{ jabon.nombre }}</option>
              </select>
              <!-- <div class="invalid-feedback">Debe seleccionar una opción</div> -->
            </div>
            <div class="mb-3">
              <label for="desodorante" class="form-label">Desodorante</label>
              <select id="desodorante" class="form-select" required>
                <option value="">Seleccione una opción</option>
                <option v-for="des in productos" :value="`${des._id}`">{{ des.nombre }}</option>
                >
              </select>
              <!-- <div class="invalid-feedback">Debe seleccionar una opción</div> -->
            </div>
            <div class="mb-3">
              <label for="existencia" class="form-label">Existencia</label>
              <input type="number" id="existencia" class="form-control" required>
              <!-- <div class="invalid-feedback">La existencia es requerida</div> -->
            </div>
            <button type="button" class="btn btn-success btn-block mt-3" @click="addPaquete">Agregar Paquete</button>
            <button type="button" class="btn btn-danger btn-block mt-3" @click="back">Regresar</button>
          </form>
        </div>
      </div>
    </div>
  </template>


  <style>
    /* Estilos para el formulario */

/* Estilos para el título del formulario */
.form-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Estilos para los campos del formulario */
.form-label {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-control {
  font-size: 1rem;
}

/* Estilos para el botón del formulario */
.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 2rem;
}

.btn-success:hover {
  background-color: #882121;
  border-color: #7e1e1e;
}
.btn-danger {
  background-color: #a72828;
  border-color: #a72828;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 2rem;
}

.btn-danger:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
/* Estilos para las validaciones de los campos */
.invalid-feedback {
  font-size: 0.875rem;
  display: block;
}

.is-invalid {
  border-color: #dc3545 !important;
}

/* Estilos para la página en general */

.container {
  max-width: 60%;
  margin: 0 auto;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

</style>