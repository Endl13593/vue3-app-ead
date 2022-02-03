<template>
    <form action="#" method="post" @submit.prevent="login">
        <div class="groupForm">
            <i class="far fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" required>
        </div>
        <div class="groupForm">
            <i class="far fa-key"></i>
            <input type="password" name="password" placeholder="Senha" required>
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
import router from '@/router'

export default {
    name: 'Auth',

    setup() {

    onBeforeMount(() => {
      document.title = 'Login - Curso EAD com Vue.js 3'
    })

    const login = () => { router.push({name: 'campus.home'}) }

    return {
        login
    }

  }
}
</script>