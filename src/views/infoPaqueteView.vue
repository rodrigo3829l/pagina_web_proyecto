<template>
<div class="div2 animate__animated animate__flash">
    <img class="imag" src="./sources/img/img" alt="">
</div>


<div class="div3">
    <section>
        <div class="desc animate__animated animate__fadeIn">
            <section class="tit">
                <h1  class="animate__animated animate__backInDown">nombre</h1>
                <h4>Paquete con:</h4>
                <h4></h4>
                <h4></h4>
                <h2 class="precio">precio</h2>
                <hr>
                <h4>Descripcion</h4>
                <p>descripcion</p>
            </section>
        </div>
    </section>
</div>


<div class="div4">
    <section>
        <div class="desc">
            <div class="pg animate__animated animate__backInRight">
                <h2>Total</h2>
                <h2 class="precio">precio</h2>
                <h4>Seleccione la cantidad</h4>
                <section class="op">
                    <label for="cantidad">Cantidad</label>
                    <select name="cantidad" id="cantidad">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select><br><hr>
                </section>
                <div class="botones">
                    <a href="./carrito.php">Agregar al carrito</a><br><br>
                    <a href="./pago.php">Comprar ahora</a>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="div5 animate__animated animate__fadeIn">
    <hr><hr>
     <div id="cardss">
<div class='title-cards'>
<h1>Productos de origen natural</h1>
</div>
<div class='container'>
        <div class='container-card animate__animated animate__fadeIn'>
            <div class='card'>
                <figure>
                    <img src='./sources/img/".$row['>
                </figure>
                <div class='contenido-card'>
                    <h3>".$row['vchNombre']."</h3>
                    <h3>$".$row['fltPrecio']."</h3>
                    <h3>".$row['vchDescripcion']."</h3>
                    <a @click="infoPaquete">Comprar</a>
                </div>
            </div>
            </div>

</div>       
</div>
</div>
</template>

<script>
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.css'
    import '@fortawesome/fontawesome-free/css/all.css'
    import 'animate.css/animate.min.css'
</script>

<style>
    *{
    margin: 0px;
    padding: 0px;
}
body{
    background-color: #999;
}
.parent {
    display: grid;
    grid-template-columns: 1fr repeat(2, .5fr);
    grid-template-rows: .5fr 1.fr repeat(2, .4fr) 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
.tit{
    font-family: 'Times New Roman', Times, serif;
    padding: 20px;
    background-color: azure;
}
.op{
    text-align: center;
}

.div1 { grid-area: 1 / 1 / 2 / 4; }
.div2 { grid-area: 2 / 1 / 3 / 2;
}

.div3 { 
    grid-area: 2 / 2 / 3 / 3; 
}
.div4 { 
    grid-area: 2 / 3 / 3 / 4; 
}
.div5 { 
    grid-area: 3 / 1 / 4 / 4; 
}
.div6 { 
    grid-area: 4 / 1 / 5 / 4; 

}
.div7 { 
    grid-area: 5 / 1 / 6 / 4; 
}
.desc{
    padding: 20px;
}
.imag{
	width: 100%;
	height: 100%;
}
.pg{
    padding: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: #888 4px 4px 4px 4px;
}
.botones{
    text-align: center;
}
.tit{
    font-family: 'Times New Roman', Times, serif;
    padding: 20px;
box-shadow: #888 4px 4px 4px 4px;
}
.precio{
    color: #0b76a6;
    font-family: cursive;
    text-align: center;

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
/*paquetes extra*/
.botones a{
	display: inline-block;
	padding: 10px;
	margin-top: 10px;
	text-decoration: none;
	color: #2fb4cc;
	border: 1px solid #2fb4cc;
	border-radius: 4px;
	transition: all 400ms ease;
	margin-bottom: 5px;
}
.botones a:hover{
	background: #2fb4cc;
	color: #fff;
}
/*Cards*/
.container{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 10px;
}
.container-card{
	max-width: 400px;
}
.title-cards{
	width: 100%;
	max-width: 1080px;
	margin: auto;
	padding: 20px;
	margin-top: 20px;
	text-align: center;
	color: #7a7a7a;
}
.card{
	width: 100%;
	border-radius: 6px;
	overflow: hidden;
	background:#fff;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
	transition: all 400ms ease-out;
	cursor: default;
}
.card:hover{
	box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
	transform: translateY(-3%);
}
.card img{
	width: 100%;
	height: 210px;
}
.card .contenido-card{
	padding: 15px;
	text-align: center;
}
.card .contenido-card h3{
	margin-bottom: 15px;
	color: #7a7a7a;
}
.card .contenido-card p{
	line-height: 1.8;
	color: #6a6a6a;
	font-size: 14px;
	margin-bottom: 5px;
}
.card .contenido-card a{
	display: inline-block;
	padding: 10px;
	margin-top: 10px;
	text-decoration: none;
	color: #2fb4cc;
	border: 1px solid #2fb4cc;
	border-radius: 4px;
	transition: all 400ms ease;
	margin-bottom: 5px;
}
.card .contenido-card a:hover{
	background: #2fb4cc;
	color: #fff;
}
@media only screen and (min-width:320px) and (max-width:768px){
	.container-card{
		flex-wrap: wrap;
	}
	.card{
		margin: 15px;
	}
}


</style>