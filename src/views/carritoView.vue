<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="card-title mb-0">Detalle de la venta</h5>
            </div>
            <div class="card-body">
              <div class="row mb-4">
                <div class="col-md-6">
                  <p class="mb-0"><strong>id recib: 18268282</strong></p>
                </div>
              </div>
              <div class="row mb-2" v-for="paquete in carrito">
                  <div class="col-md-6">
                    <p class="mb-0">{{ paquete.nombre }}</p>
                  </div>
                  <div class="col-md-6">
                    <p class="mb-0 text-end">$ {{ paquete.total }}</p>
                  </div>
              </div>
              
              <hr>
              <!-- <div class="row mb-2">
                <div class="col-md-6">
                  <p class="mb-0">IVA</p>
                </div>
                <div class="col-md-6">
                  <p class="mb-0 text-end">$30</p>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-6">
                  <p class="mb-0">Costos de envío</p>
                </div>
                <div class="col-md-6">
                  <p class="mb-0 text-end">$20</p>
                </div>
              </div> -->
              <hr>
              <div class="row mb-2">
                <div class="col-md-6">
                  <p class="mb-0"><strong>Total</strong></p>
                </div>
                <div class="col-md-6">
                  <p class="mb-0 text-end"><strong>$ {{ total }}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="card-title mb-0">Gracias por comprar nuestros productos</h5>
            </div>
            <div class="card-body">
              <img src="#" class="mb-3" alt="">
              <p class="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt nobis aliquam delectus voluptatibus voluptate maiores ea temporibus possimus, eum reiciendis, laboriosam vero beatae inventore tempore qui repudiandae nisi totam.</p>
              <div class="d-grid gap-2">
                <RouterLink to="/pagos">
                  <a href="" class="btn btn-success">Pagar</a>
                </RouterLink>
                <RouterLink to="/ventas">
                  <a href="" class="btn btn-outline-success">Seguir comprando</a>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

 <script setup>
import { ref } from 'vue';
import { api } from '../axios/axios';
import { RouterLink, useRouter } from "vue-router";

  const total = ref({});
  const carrito = ref ({});

 const agregarCarrito = async () =>{
  try {
        const arregloString =localStorage.getItem('venta');
        let arreglo = [];
        if (arregloString !== null) {
          arreglo = JSON.parse(arregloString);
        }
        let nuevosPaquetes = [];
        let pago = 0;
        for (let i = 0; i < arreglo.length; i++) {
          const {data} = await api.get(`/paquetes/${arreglo[i].idPaquete}`);
          const dat = {
            nombre: data.getPaquete.nombre,
            cantidad: arreglo[i].cantidad,
            total: Number(data.getPaquete.precio) * arreglo[i].cantidad,
            img: data.getPaquete.img.secure_url,
          };
          pago += dat.total;
          nuevosPaquetes.push(dat);
        }
        console.log(nuevosPaquetes)
        total.value=pago
        carrito.value=nuevosPaquetes
      } catch (error) {
        console.log(error);
      }
 }
 agregarCarrito()
</script>
  
<style>
    /* Ticket styles */
.ticket {
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.ticket h3 {
  margin-bottom: 10px;
  font-size: 24px;
}

.ticket hr {
  border: 1px solid #ccc;
  margin: 20px 0;
}

.ticket p {
  font-size: 16px;
  margin-bottom: 10px;
}

.ticket h5 {
  margin-bottom: 10px;
  font-size: 18px;
}

/* Card styles */
.card {
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card img {
  max-width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card .card-body {
  padding: 20px;
}

.card .card-title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.card .card-text {
  margin-bottom: 10px;
  font-size: 16px;
}

.card .btn {
  margin-top: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in-out;
}

.card .btn:hover {
  background-color: #28a745;
}

/* Container styles */
.container {
  margin: 50px auto;
  max-width: 1200px;
}

/* Button styles */
.btn {
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #28a745;
}

.btn-success {
  background-color: #6c757d;
}

.btn-success:hover {
  background-color: #5a6268;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .container {
    margin: 30px auto;
  }
}

@media screen and (max-width: 576px) {
  .card-img-top {
    height: 150px;
  }
}

</style>
   
  