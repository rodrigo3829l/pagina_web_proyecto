<template>
     <form class="animate__animated animate__backInLeft" action="./backendagregar.php" method="post" enctype="multipart/form-data">
        <h2>Agregar Nuevo paquete</h2>
        <input type="text" name="nombre" placeholder="Nombre del paquete" required pattern="[a-zA-Z]{4,20}">
        <input type="number" name="precio" placeholder="Precio del paquete" required pattern="[0-9]{4,15}">
        <input type="number" name="stock" placeholder="Cantidad del paquete" required pattern="[0-9]{4,15}">   
        <input type="text" name="descripcion" placeholder="Descripcion del paquete" required pattern="[a-zA-Z0-9_]{4,200}">
        <input type="file" name="imagen" id="imagen"  required >
        
        <button type="submit" id="boton">Agregar</button>
    </form>
</template>

<script setup>
import {api} from '../axios/axios.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css/animate.min.css'
</script>

<style>
    body {  
    background: #FC5C7D;
    background: -webkit-linear-gradient(to right, #e9e9ec, #e2dedf);
    background: linear-gradient(to right, #e9e9ec, #e2dedf);
    font-family: 'Poppins', sans-serif;
}

h1{
    text-align: center;
    margin: 10px 0;
    font-weight: 800;
}

form{
    margin-top: 15px;
    background: #fff;
    width: 30%;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.8);
}

.form{
    width: 100%;
    margin: auto;
}

form .grupo{
    position: relative;
    margin: 45px;
}

input, textarea{
    background: none;
    color:#c6c6c6;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border:none;
    border-bottom: 1px solid var(--colorTextos);
    resize: none;
}

input:focus,textarea:focus{
    outline: none;
    color: rgb(94,93,93);
}

input:focus~label, 
input:valid~label, 
textarea:focus~label, textarea:valid~label{
    position: absolute;
    top: -14px;
    font-size: 12px;
    color: #2196F3;
}

label{
    color: var(--colorTextos);
    font-size: 16px;
    position: absolute;
    left: 5px;
    top:10px;
    transition: 0.5s ease all;
    pointer-events: none;
}


input:focus~.barra::before, textarea:focus~.barra::before{
    width: 100%;
}
.barra{
    position: relative;
    display: block;
    width: 100%;
}
.barra::before{
    content: '';
    height: 2px;
    width: 0%;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to right, #6A82FB, #FC5C7D);
    transition: 0.3s ease all;
    left: 0%;
}
button{
    background: #FC5C7D;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6A82FB, #FC5C7D);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: block;
    width: 100px;
    height: 40px;
    border:none;
    color:#fff; 
    border-radius: 4px;
    font-size: 16px;
    margin: 10px auto;
    cursor: pointer;
}

@media screen and (max-width:1100px){
    form{
        width: 50%;
    }
}

@media screen and (max-width:600px){
    form{
        width: 60%;
    }
}

@media screen and (max-width:450px){
    form{
        width: 80%;
    }
}

@media screen and (max-width:300px){
    form{
        width: 90%;
    }
}
</style>