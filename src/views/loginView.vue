     <template>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-lg">
                        <div class="card-header bg-success text-white text-center">
                            <h4>Iniciar sesión</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="login">
                                <div class="form-group">
                                    <label for="usuario">Usuario</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" class="form-control" id="usuario" placeholder="Ingrese su usuario" required >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password">Contraseña</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                        </div>
                                        <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña" required>
                                    </div>
                                    
                                </div>
                                <button type="submit" class="btn btn-success btn-block mt-4">Ingresar</button>
                            </form>
                            <!-- <label for="usuario">{{ userStore.token }}</label> -->
                        </div>
                        <div class="card-footer bg-light">
                            <div class="text-center">
                                <p class="mb-0">¿No tienes una cuenta? <a href="#" @click="registrarse"  class="text-primary">Regístrate</a></p>
                                <p class="mb-0">¿Olvidaste la contraseña? <a href="#" @click="forgot" class="text-primary">Recupérala aquí</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br><br>  
    </template>
    
    <script setup>
        import { useRouter, useRoute } from 'vue-router';
        import { useUserStore } from '../../store/user-store.js';
        const userStore = useUserStore();
        const router = useRouter();

        const login = async () =>{
           await userStore.login(
                document.querySelector("#usuario").value,
                document.querySelector("#password").value
                )
                alert('Inicio de sesion exitoso');
                router.push('/');

        }
        userStore.refreshToken();
        const forgot = () =>{
            router.push('/recuperar')
        }

        const registrarse = () =>{
            router.push('/registrarse')
        }

    </script>
    
