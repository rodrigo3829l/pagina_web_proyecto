<script setup>
    import { RouterLink, RouterView, useRouter } from 'vue-router'
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    import 'animate.css/animate.min.css'

    import { useUserStore } from '../store/user-store.js';
    import { ref, watchEffect } from 'vue';
    import { useRoute } from 'vue-router'

 const router = useRouter();

    const userStore = useUserStore();
    const user = ref(localStorage.getItem('tipo'));

    function obtenerConstantes() {
        user.value = localStorage.getItem('tipo');
        userStore.refreshToken();
    }

    // Ejecutar la función obtenerConstantes cada 500ms
    setInterval(obtenerConstantes, 1000);

    function accion(){
    var ancla= document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
    // userStore.refreshToken();
}
const logout = async () =>{
    await userStore.logout();
    router.push('/')
}

</script>

<template>
  <header id="main-header">
        <a id="logo-header" href="#">
            <span class="site-name Up animate__animated animate__fadeInUp">Natural&Handmade</span>
            <span class="site-desc">Empresa mexicana donde lo importante es lo natural</span>
        </a>
        <nav >
            <ul>
              <li><button class="nav-boton" @click="accion">Menu</button></li>
              <li><a class="nav-enlace desaparece"><RouterLink to="/">Home</RouterLink></a></li>
              <li v-if="!userStore.token"><a class="nav-enlace desaparece"><RouterLink to="/login">Login</RouterLink></a></li>
              <li v-if="!user || user !==  'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/ventas">Comprar</RouterLink></a></li>
              <li v-if="user ===  'User'"><a class="nav-enlace desaparece"><RouterLink to="/carrito">Carrito</RouterLink></a></li>
              <li v-if="!user || user !==  'Admin'" ><a class="nav-enlace desaparece"><RouterLink to="/productos">Productos</RouterLink></a></li>
              <li v-if="!user || user !==  'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/contacto">Contacto</RouterLink></a></li> 
              <li v-if="user ===  'User'"><a class="nav-enlace desaparece"><RouterLink to="/cuenta">Perfil</RouterLink></a></li> 
              
              <li v-if=" user && user === 'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/getVentas">Ventas</RouterLink></a></li>
              <li v-if=" user && user === 'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/verUsers">Usuarios</RouterLink></a></li>
              <li v-if=" user && user === 'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/verProducts">Productos</RouterLink></a></li>
              <li v-if=" user && user === 'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/paque">Paquetes</RouterLink></a></li>
              <li v-if=" user && user === 'Admin'"><a class="nav-enlace desaparece"><RouterLink to="/verEncargados">Encargados</RouterLink></a></li>
              <li v-if="user && user ===  'User'"><a class="nav-enlace desaparece" href="https://proyectonh.com/project/">Producto iot</a></li>
              <li v-if="userStore.token"><a class="nav-enlace desaparece"  href="" @click="userStore.logout">Cerrar sesion</a></li> 


            </ul>
        </nav>
    </header>

  <RouterView />

  <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Desarrollo</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Compañia</a></li>
                            <li><a href="#">Colaboradores</a></li>
                            <li><a href="#">Productos</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Natural&Handmade</h3>
                        <p>La empresa Natural&Handmade es una empresa mexicana decdicada a la produccion y distribucion de productos de higiene personal de origen natural, todo con la finalidad de ofrecer mejores servicios al cliente.</p>
                    </div>
                    <div class="col item social">
                        <a href="https://www.facebook.com/groups/449592056554286"><i class="fab fa-facebook fa-lg"></i></a><a href="https://twitter.com/NatAndHand"><i class="fab fa-twitter fa-lg"></i></a><a href="https://www.instagram.com/naturalandhandame/"><i class="fab fa-instagram fa-lg"></i></a></div>
                </div>
                <p class="copyright">Natural&Handmade © 2023</p>
            </div>
        </footer>
    </div>
</template>

<style>
*{
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
    }
    /*Header*/
#main-header {
    background: #333;
    color: white;
    height: 80px;
}	
#main-header a {
    color: white;
}
#logo-header {
    float: left;
    padding: 15px 0 0 20px;
    text-decoration: none;
}
#logo-header:hover {
    color: #0b76a6;
}
#logo-header .site-name {
    display: block;
    font-weight: 700;
    font-size: 1.2em;
}
                
#logo-header .site-desc {
    display: block;
    font-weight: 300;
    font-size: 0.8em;
    color: #999;
}
@media(max-width: 370px){
    #logo-header .site-name {
        font-size: 0.9em;
    }
                    
    #logo-header .site-desc {
        font-size: 0.6em;
    }
}
nav {
    float: right;
}
nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-right: 20px;
}
nav ul li {
    display: inline-block;
    line-height: 80px;
}
nav ul li a {
    display: block;
    padding: 0 10px;
    text-decoration: none;
}
nav ul li a:hover {
    background: #0b76a6;
}
/*Comienza lo responsivo del menu*/
nav{
    display: flex;
}
.nav-enlace{
    display: inline-block;
    color: aliceblue;
    text-decoration: none;
}

.nav-boton{
    background: #333;
    color: #fff;
    display: none;
    border: none;
    padding: 0px 0px 0px 20px;
}
@media(max-width: 980px){
    nav ul li {
        display: flex;
        justify-content: space-around;
        line-height: 70px;
    }
    nav{
        background-color: #333;
        float: right;
        position: absolute;
        z-index: 100;
        right: 0;
    }

    .nav-enlace{
        margin: 0px;
    }
    .nav-boton{
        display: inline-block;
        border: none;
        padding: 0px 0px 0px 10px;
    }
    .desaparece {
        display: none;
    }
}
.footer-dark {
    padding:50px 0;
    color:#f0f9ff;
    background-color:#282d32;
}
              
.footer-dark h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:16px;
}
              
.footer-dark ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
}
              
.footer-dark ul a {
    color:inherit;
    text-decoration:none;
    opacity:0.6;
}
              
.footer-dark ul a:hover {
    opacity:0.8;
}
              
@media (max-width:767px) {
    .footer-dark .item:not(.social) {
        text-align:center;
        padding-bottom:20px;
    }
}
              
.footer-dark .item.text {
    margin-bottom:36px;
}
              
@media (max-width:767px) {
    .footer-dark .item.text {
        margin-bottom:0;
    }
}
.footer-dark .item.text p {
    opacity:0.6;
    margin-bottom:0;
} 
.footer-dark .item.social {
    text-align:center;
}
@media (max-width:991px) {
    .footer-dark .item.social {
        text-align:center;
        margin-top:20px;
    }
}      
.footer-dark .item.social > a {
    font-size:20px;
    width:36px;
    height:36px;
    line-height:36px;
    display:inline-block;
    text-align:center;
    border-radius:50%;
    box-shadow:0 0 0 1px rgba(255,255,255,0.4);
    margin:0 8px;
    color:#fff;
    opacity:0.75;
}
.footer-dark .item.social > a:hover {
    opacity:0.9;
}
.footer-dark .copyright {
    text-align:center;
    padding-top:24px;
    opacity:0.3;
    font-size:13px;
    margin-bottom:0;
}
</style>
