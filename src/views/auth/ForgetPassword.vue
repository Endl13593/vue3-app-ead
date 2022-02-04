<template>
    <form action="#" method="post" @submit.prevent="forgetPassword">
        <div class="groupForm">
            <i class="far fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" v-model="email">
        </div>
        <button class="btn primary" type="submit" :disabled="loading">
            <span v-if="loading">Processando...</span>
            <span v-else>Recuperar</span>
        </button>
    </form>
    <span>
        <p class="fontSmall">Acessar?
            <router-link :to="{name: 'auth'}" class="link primary">Clique aqui</router-link>
        </p>
    </span>
</template>

<script>
import { onBeforeMount } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'ForgetPassword',

    setup() {
    onBeforeMount(() => {
      document.title = 'Recuperar Senha - Curso EAD com Vue.js 3'
    })

    const store = useStore()
    const email = ref('')
    const loading = ref(false)

    const forgetPassword = () => {
        loading.value = true

        store.dispatch('forgetPassword', { email: email.value })
                .then(() => {
                    notify({
                        title: "Sucesso!",
                        text: "Verique seu e-mail, foi enviado um link para reset da senha!",
                        type: 'success'
                    });
                })
                .catch((error) => {
                    let msgError = 'Falha na requisição'

                    if (error.status === 422) msgError = 'Dados Inválidos!'
                    if (error.status === 404) msgError = 'Usuário Não Encontrado!'

                    notify({
                        title: "Erro!",
                        text: msgError,
                        type: 'error'
                    });
                })
                .finally(() => loading.value = false)
    }

    return {
        forgetPassword,
        email,
        loading
    }
  }
}
</script>