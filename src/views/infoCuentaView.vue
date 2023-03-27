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
                <img src="../components/img/HD-wallpaper-natural-medicine-imunitatii-ficatului-detoxifirea-intarirea.jpg" alt="Imagen de Perfil" class="rounded-circle" style="width: 100px;">
              </div>
              <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" value="Nombre del Usuario" disabled>
              </div>
              <div class="form-group">
                <label for="apellidos">Apellidos:</label>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" id="apellidos" value="Apellido Paterno" disabled>
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" id="apellidos" value="Apellido Materno" disabled>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="usuario">Nombre de Usuario:</label>
                <input type="text" class="form-control" id="usuario" value="Nombre de Usuario" disabled>
              </div>
              <div class="form-group">
                <label for="correo">Correo Electrónico:</label>
                <input type="email" class="form-control" id="correo" value="usuario@example.com" disabled>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 mb-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              Compras Realizadas
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-md-2">
                  <img src="../components/img/como_hacer_jabones_artesanales_naturales_de_hierbas_1136_orig.jpg" alt="Imagen del Paquete" class="img-fluid">
                </div>
                <div class="col-md-10">
                  <h5 class="mb-0">Nombre del Paquete</h5>
                  <p class="mb-1">$XX.XX por unidad</p>
                  <p class="mb-1">Cantidad: XX</p>
                  <p class="mb-1">Total: $XXXX.XX</p>
                  <p class="mb-0">Fecha de Compra: XX/XX/XXXX</p>
                </div>
              </div>
              <!-- Puedes repetir este bloque para cada compra realizada -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

    <script setup>
    </script>