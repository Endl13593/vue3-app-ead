<template>
    <form action="/dist/index.html" method="">
        <div class="groupForm">
            <i class="far fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" required>
        </div>
        <button class="btn primary" type="submit">Recuperar</button>
    </form>
    <span>
        <p class="fontSmall">Acessar?
            <router-link :to="{name: 'auth'}" class="link primary">Clique aqui</router-link>
        </p>
    </span>
</template>

<script>
import { onBeforeMount } from 'vue'

export default {
    name: 'ForgetPassword',

    setup() {
    onBeforeMount(() => {
      document.title = 'Recuperar Senha - Curso EAD com Vue.js 3'
    })
  }
}
</script>