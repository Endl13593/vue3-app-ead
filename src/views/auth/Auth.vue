<template>
    <form action="#" method="post" @submit.prevent="auth">
        <div class="groupForm">
            <i class="far fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" v-model="email">
        </div>
        <div class="groupForm">
            <i class="far fa-key"></i>
            <input type="password" name="password" placeholder="Senha" v-model="password">
            <i class="far fa-eye buttom"></i>
        </div>
        <button class="btn primary" type="submit" :disabled="loading">
            <span v-if="loading">Autenticando...</span>
            <span v-else>Login</span>
        </button>
    </form>
    <span>
        <p class="fontSmall">
            Esqueceu sua senha?
            <router-link :to="{name: 'forget.password'}" class="link primary">Clique aqui</router-link>
        </p>
    </span>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'
import { notify } from "@kyvg/vue3-notification";


export default {
    name: 'Auth',

    setup() {
        const store = useStore()
        const email = ref('')
        const password = ref('')
        const loading = ref(false)

        onBeforeMount(() => {
        document.title = 'Login - Curso EAD com Vue.js 3'
        })

        const auth = () => {
            loading.value = true

            store.dispatch('auth', {
                email: email.value,
                password: password.value,
                device_name: 'app_web'
            })
            .then(() => {
                router.push({ name: 'campus.home' })
                notify({
                    title: "Sucesso!",
                    text: "Logado com sucesso!",
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
            auth,
            email,
            password,
            loading
        }

    }
}
</script>