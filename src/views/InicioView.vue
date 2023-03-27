

<script setup>
	  import axios from "axios";
    import { useUserStore } from '../../store/user-store.js';
    import { useRouter } from "vue-router";
    const userStore = useUserStore();
    const router = useRouter();
    const user = localStorage.getItem('tipo');
    const redirect = () => {
      router.push('/login')
    }

	
</script>


<template>
	<div>
	  <section class="header2">
		<div class="text-box">
		  <h2 class="Up">NATURAL & HANDMADE</h2>
		  <p id="headtext" class="BottomLeft">Productos de higiene personal naturales</p>
		  <!-- <a v-if="!user || user !== 'Admin'" href="#" class="hero_btn" @click="redirect">Quieres suscribirte</a> -->
		</div>
	  </section>

	  
	  <div v-if="!user || user !== 'Admin'">
      <div class="container">
      <h2 class="text-center mt-4">Miembros desarrolladores</h2>

      <div class="row mt-4">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/rodrig.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Rodrigo Del Angel Gerardo</h5>
              <p class="card-text">Lider del equipo</p>
            
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/aveina.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Avelina Hernandez Hernandez</h5>
              <p class="card-text">Diseño de interfaces</p>
              
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/miguel.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Miguel Lara Hernandez</h5>
              <p class="card-text">Desarrallador de interfaces</p>
              
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/julio.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Julio Cesar</h5>
              <p class="card-text">Miembro mas importante del equipo</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
	  </div>

    <div v-else>
		<div class="container">
      <h2 class="text-center mt-4">Panel de Administración</h2>

      <div class="row mt-4">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/HD-wallpaper-natural-medicine-imunitatii-ficatului-detoxifirea-intarirea.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Productos</h5>
              <p class="card-text">Administra tus productos aquí.</p>
              <a href="#" class=" a btn btn-primary">Ir a productos</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/parabenos-siliconas-parafinas-sulfatos-2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Paquetes</h5>
              <p class="card-text">Administra tus paquetes aquí.</p>
              <a href="#" class=" a btn btn-primary">Ir a paquetes</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/zyro-image.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Ventas</h5>
              <p class="card-text">Administra tus ventas aquí.</p>
              <a href="#" class=" a btn btn-primary">Ir a ventas</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="card h-100">
            <img src="../components/img/5387666.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Usuarios y encargados</h5>
              <p class="card-text">Administra tus usuarios y encargados aquí.</p>
              <a href="#" class=" a btn btn-primary">Ir a usuarios y encargados</a>
            </div>
          </div>
        </div>
      </div>
    </div>
	  </div>
	  
	</div>
  </template>



<style>


.header2 {
  min-height: 80vh;
  width: 100%;
  background-image: url(../components/img/como_hacer_jabones_artesanales_naturales_de_hierbas_1136_orig.jpg);
  background-position: 100%;
  background-size: cover;
  position: center;
}

.text-box {
  width: 90%;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-box h2 {
  font-size: 60px;
  font-weight: 300;
  color: #000;
}

.text-box #headtext {
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: -1%;
  margin-bottom: 1%;
  color: #1e2020;
}

.text-box p {
  margin: 10px 0 40px;
  font-size: 18px;
  color: #b13636;
}

@media only screen and (min-width: 320px) and (max-width: 800px) {
  .text-box h2 {
    padding: 20% 0px 0px 0px;
    font-size: 38px;
    font-weight: 300;
    color: #000;
  }

  .text-box #headtext {
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: -1%;
    margin-bottom: 1%;
    color: #1e2020;
  }

  .text-box p {
    margin: 10px 0 40px;
    font-size: 18px;
    color: #b13636;
  }
}

.hero_btn {
  position: relative;
  display: inline-block;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 12px 34px;
  font-size: 13px;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
}

.hero_btn:hover {
  border: 1px solid #24f8c7;
  background: #24f8c7;
  transition: 1s;
}

.container-card {
  width: 100%;
  display: flex;
  max-width: 1100px;
  margin: auto;
}

.title-cards {
  width: 100%;
  max-width: 1080px;
  margin: auto;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  color: #7a7a7a;
}

.card {
  width: 100%;
  margin: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform .5s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.card .content {
  padding: 20px;
}

.card h3 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  color: #1e2020;
}

.card p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #4a4a4a;
  line-height: 1.6;
}

.card .a {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  background-color: #1e2020;
  border-radius: 30px;
  transition: background-color .3s ease;
}

.card .a:hover {
  background-color: #24f8c7;
}

</style>