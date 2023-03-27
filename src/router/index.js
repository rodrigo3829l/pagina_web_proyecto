import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../../store/user-store.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',//ya home
      name: 'home',
      component: () => import('../views/InicioView.vue') //No requiere inicio de sesion
    },
    {
      path: '/carrito',//ya
      name: 'carrito',
      meta:{
        auth: true
      },
      component: () => import('../views/carritoView.vue')  //requiere ser usuario
    },
    {
      path: '/login',// no requeire inicio de sesion
      name: 'login',
      meta : {
        log: true
      },
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/cuenta',// no requeire inicio de sesion
      name: 'login',
      // meta : {
      //   auth: true
      // },
      component: () => import('../views/infoCuentaView.vue')
    },
    {
      path: '/ventas',// no requiere inicio de sesion
      name: 'ventas',
      component: () => import('../views/ventasView.vue')
    },
    {
      path: '/ventas/:id',//no requiere inicio de sesion
      name: 'venta',
      component: () => import('../views/paquetesView.vue')
    },
    {
      path: '/productos', // no requiere inicio de sesion
      name: 'productos',
      component: () => import('../views/infprodView.vue')
    },

    {
      path: '/contacto',// no requiere inicio de seion
      name: 'contacto',
      component: () => import('../views/contactoView.vue')
    },
    {
      path: '/pagos', //tiene que ser use, si requiere
      name: 'pagos',
      meta: {
        auth: true
      },
      component: () => import('../views/pagosView.vue')
    },
    {
      path: '/paque',//requiere ser admin
      name: 'paque',
      meta: {
        admin: true
      },
      component: () => import('../views/paqueView.vue')
    },
    {
      path: '/addPaque/',//requiere ser admin
      name: 'addPaque',
      meta: {
        admin: true
      },
      component: () => import('../views/formAddPaqView.vue')
    },
    {
      path: '/paque/:id',//requiere ser admon
      name: 'editPaque',
      meta: {
        admin: true
      },
      component: () => import('../views/editPaqueteView.vue')
    },
    {
      path: '/recuperar', //no requiere
      name: 'recuperar',
      component: () => import('../views/recuperarView.vue')
    },
    {
      path: '/recuperar/:id', //no
      name: 'respuesta',
      component: () => import('../views/respuestaView.vue')
    },
    {
      path: '/recuperar/change/:id', //no requiere
      name: 'changePswd',
      component: () => import('../views/changePswdView.vue')
    },
    {
      path: '/registrarse', //no requiere
      name: 'registrarse',
      component: () => import('../views/registrarseView.vue')
    },
    {
      path: '/verUsers',// requiere ser Admin
      name: 'verUsers',
      meta: {
        admin: true
      },
      component: () => import('../views/verUsuariosView.vue')
    },
    {
      path: '/addUser',//requiere ser admin
      name: 'addUser',
      meta: {
        admin: true
      },
      component: () => import('../views/addUserView.vue')
    },
    {
      path: '/updateUser/:id',//requiere ser admin
      name: 'updateUser',
      meta: {
        admin: true
      },
      component: () => import('../views/updateUserView.vue')
    },
    {
      path: '/verProducts',//requiere ser admin
      name: 'verProducts',
      meta: {
        admin: true
      },
      component: () => import('../views/verProductosView.vue')
    },

    //Editar productos y agregar
    
    {
      path: '/verEncargados',//requiere ser admin
      name: 'verEncargados',
      meta: {
        admin: true
      },
      component: () => import('../views/verEncargadosView.vue')
    },
    {
      path: '/addEncargado',//requiere ser admin
      name: 'addEncargado',
      meta: {
        admin: true
      },
      component: () => import('../views/addEncargadoView.vue')
    },
    {
      path: '/getVentas',//requiere ser admin
      name: 'getVentas',
      meta: {
        admin: true
      },
      component: () => import('../views/verVentasView.vue')
    },
    {
      path: '/getVentas/:id',//requiere ser admin
      name: 'visualisaVenta',
      meta: {
        admin: true
      },
      component: () => import('../views/visualizarVentaView.vue')
    },
    
  ]
  
})
router.beforeEach( async (to, from, next) =>{
  const requiereAuth = to.meta.auth;
  const requiereAdmin = to.meta.admin;
  const requiereLog = to.meta.log;
  const userStore = useUserStore();
  const tipoUser = localStorage.getItem('tipo');


  if(requiereLog){
    console.log(to)
    await userStore.refreshToken();
    if(userStore.token){
      return next ('/');
    }
    return next();
  }

  if(requiereAuth){
    console.log(to)
    await userStore.refreshToken();
    if (tipoUser === "User"){
        return next(); 
    }
    return next("/login");
  }
  if(requiereAdmin){
    console.log(to)
    await userStore.refreshToken();
    if(tipoUser === "Admin"){
      return next();  
    }
    return next("/login");
  }
  console.log(to)
  next()
})
export default router
