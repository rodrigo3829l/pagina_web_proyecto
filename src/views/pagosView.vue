<template>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <div class="card p-5">
            <h3 class="mb-5">Pagar la compra</h3>
            <form>
              <div class="form-group">
                <label for="titular">Titular de la tarjeta</label>
                <input type="text" class="form-control" id="titular">
              </div>
              <div class="form-group">
                <label for="numero-tarjeta">Número de la tarjeta</label>
                <input type="number" class="form-control" id="numero-tarjeta">
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="mes-vencimiento">Mes de vencimiento</label>
                  <input type="number" class="form-control" id="mes-vencimiento">
                </div>
                <div class="form-group col-md-6">
                  <label for="codigo-cvc">Código CVC</label>
                  <input type="number" class="form-control" id="codigo-cvc">
                </div>
              </div>
              <div class="form-group">
                <label for="metodo-pago">Seleccione el método de pago</label>
                <select class="form-control" id="metodo-pago">
                  <option selected disabled>Método de pago</option>
                  <option value="banorte">Banorte</option>
                  <option value="coopel">Coopel</option>
                  <option value="Elektra">Elektra</option>
                  <option value="Chedraui">Chedraui</option>
                </select>
              </div>
              <button type="button" class="btn btn-success btn-block mt-4" @click="pagar">Pagar</button>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card p-5">
            <h3 class="mb-5">Detalle de la venta</h3>
            <hr>
            <p>id recib: 18268282</p>
            <div class="d-flex justify-content-between" v-for="paquete in carrito">
              <h5>{{ paquete.nombre }}</h5>
              <h5>$ {{ paquete.total }}</h5>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
              <h5>Total</h5>
              <h5>$ {{ total }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  import { api } from '../axios/axios';
  import { useUserStore } from '../../store/user-store.js';
import { PiniaVuePlugin } from 'pinia';
  const userStore = useUserStore();
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
          // console.log(nuevosPaquetes)
          total.value=pago
          carrito.value=nuevosPaquetes
        } catch (error) {
          console.log(error);
        }
   }
   agregarCarrito();
   const pagar = async () =>{
    console.log('click')
    const options = {
          headers: {
            'Authorization': `Bearer ${userStore.token}` // Agregamos el encabezado de autorización con el token
          }
        };
        try {
          const {data} = await api.get(`/auth/protected/`, options);
          const res =await api.get(`/auth/${data._id}`);
          console.log(res.data)
          const arregloString = localStorage.getItem('venta');
          let arreglo = [];
          if (arregloString !== null) {
            arreglo = JSON.parse(arregloString);
            const venta = {
              idUsuario : data._id,
              paquetes : arreglo,
            }
            console.log(venta);
          
            const response = await api({
              method: 'POST',
              url: '/ventas',
              headers:{
                "Content-Type": "application/json"
              },
              data :venta,
            });
            console.log(response);
            alert('venta realizada con exito');
            let newArray = [];
            const arregloActualizadoString = JSON.stringify(newArray);
            await localStorage.setItem('venta', arregloActualizadoString);
          }
      } catch (error) {
        console.log('errorcito')
        console.log(error)  
      }

   }
  </script>
  
  <style>
    /* Estilos para la pantalla de pago */
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.pago {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.pago h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.pago label {
  font-size: 16px;
  font-weight: 600;
}

.pago input[type="text"],
.pago input[type="number"],
.pago select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: 400;
}

.pago select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 6'%3E%3Cpath d='M6 6L0 0h12z'/%3E%3C/svg%3E");
  background-position: right 10px top 50%;
  background-repeat: no-repeat;
  background-size: 8px;
  padding-right: 30px;
}

.pago a {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  padding: 15px 0;
  transition: background-color 0.2s;
}

.pago a:hover {
  background-color: #0069d9;
}

.ticket {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.ticket h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.ticket hr {
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

.ticket p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
}

.ticket h5 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: right;
}

</style>