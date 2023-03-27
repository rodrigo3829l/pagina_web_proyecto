<template>
    <br>
    <br>
    <center>
        <h3>welcome: </h3>
        <table>
            <thead>
                <br>
                <tr>
                    <th><h5>Id</h5></th>
                    <th><h5>Nombre</h5></th>
                    <th><h5>Tipo de usuario</h5></th>
                    <th><h5>Sexo</h5></th>
                    <th><h5>Telefono</h5></th>
                    <th><h5>Correo</h5></th>
                    <th><h5>Direccion</h5></th>
                    <th><h5>Editar</h5></th>
                    <th><h5>Eliminar</h5></th>
                </tr>
            </thead>
            <tbody>
                
                
            </tbody>
        </table>
        <br>
        <a class="enlace" href="./agregarusu.php">Agregar</a>
    </center>
        <br>
       
</template>

<script>
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    import 'animate.css/animate.min.css'

    export default{
        name: 'UsuariosVue',
    };

</script>


<style>
table{
    background-color: rgb(243, 241, 233);
    border-collapse: collapse;
    text-align: center;
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
}
thead{
    background-color: #246356;
    border-bottom: solid 5px #0F362D;
    color: white;
}
th, td{
    border: 1px solid black;
    padding: 10px;
}
tr{
    padding: 10px;
}
tr:nth-child(even){
    background-color: rgb(196, 193, 193);
}
tr:hover td{
    background-color: #2b947d;
    color: white;
}
.tbl{
    font-family: Arial, Helvetica, sans-serif;
}
.enlace{
    display: inline-block;
	padding: 10px;
	margin-top: 10px;
	text-decoration: none;
	color: #2fcc63;
	border: 1px solid #2fcc63;
	border-radius: 4px;
	transition: all 400ms ease;
	margin-bottom: 5px;
}
.enlace:hover{
    background: #2fcc63;
	color: #fff;
}

*{
    padding: 0;
    margin: 0;
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




</style>