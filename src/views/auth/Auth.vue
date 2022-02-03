<template>
    <form action="#" method="post" @submit.prevent="auth">
        <div class="groupForm">
            <i class="far fa-envelope"></i>
            <input type="email" name="email" placeholder="Email">
        </div>
        <div class="groupForm">
            <i class="far fa-key"></i>
            <input type="password" name="password" placeholder="Senha">
            <i class="far fa-eye buttom"></i>
        </div>
        <button class="btn primary" type="submit">Login</button>
    </form>
    <span>
        <p class="fontSmall">
            Esqueceu sua senha?
            <router-link :to="{name: 'forget.password'}" class="link primary">Clique aqui</router-link>
        </p>
    </span>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
//import router from '@/router'

export default {
    name: 'Auth',

    setup() {

        const store = useStore()

        onBeforeMount(() => {
        document.title = 'Login - Curso EAD com Vue.js 3'
        })

        const auth = () => {
            store.dispatch('auth', {
                email: 'nunes.eduardo1993@gmail.com',
                password: '123456',
                device_name: 'auth_by_vue3'
            })
        }

        return {
            auth
        }

    }
}
</script>