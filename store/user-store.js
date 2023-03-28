import { ref } from "vue"
import { defineStore } from 'pinia'
import {api} from '../src/axios/axios.js'

export const useUserStore = defineStore('user', () => {
    const token = ref(null);
    const expireIn = ref (null);
    const tipo = ref(null)

    const login = async (user, pass) => {
        const datos = {
            userName: user,
            password: pass 
        }
        try {
            const {data} = await api.post('/auth/login', datos)
            console.log(data)
            token.value = data.token;
            expireIn.value = data.expiresIn
            setTime();
            const resp = await api({
                method: 'GET',
                url : '/auth/protected',
                headers: {
                    'Authorization' : 'Bearer ' + token.value,
                },
            })
            // console.log(resp.data)
            localStorage.setItem('tipo', resp.data.tipo)
            const ventas = []
            localStorage.setItem('venta', JSON.stringify(ventas))
        } catch (error) {
            console.log(error)
        }
    }
    const logout = async () => {
        try {
            await api.get('/auth/logout')
        } catch (error) {
            console.log(error)
        } finally{
            localStorage.clear();
            resetStore();
        }
    }
    const resetStore = () =>{
        token.value = null;
        expireIn.value = null;
        localStorage.clear();
    }
    const setTime = () =>{
        setTimeout(() => {
            console.log('se refresco')
            refreshToken();
        }, expireIn.value * 1000 - 6000)
    }
    const refreshToken = async () =>{
        try {
            const {data} = await api.get ('/auth/refresh');
            token.value = data.token;
            expireIn.value = data.expiresIn;
            const resp = await api({
                method: 'GET',
                url : '/auth/protected',
                headers: {
                    'Authorization' : 'Bearer ' + token.value,
                },
            })
            localStorage.setItem('tipo', resp.data.tipo)

            setTime();
        } catch (error) {
            console.log(error)
            localStorage.removeItem('tipo')
        }
    }
    return {
        token,
        expireIn,
        login,
        logout,
        refreshToken
    }
  })