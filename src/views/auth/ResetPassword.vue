<template>
    <form action="#" method="post" @submit.prevent="resetPassword">
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
            <span v-if="loading">Processando...</span>
            <span v-else>Atualizar Senha</span>
        </button>
    </form>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import router from '@/router'
import PasswordResetService from '@/services/PasswordResetService'
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'ResetPassword',

    props: {
        token: { type: String, require: true }
    },

    setup(props) {
        const email = ref('')
        const password = ref('')
        const loading = ref(false)

        onBeforeMount(() => {
        document.title = 'Resetar Senha - Curso EAD com Vue.js 3'
        })

        const resetPassword = () => {
            loading.value = true

            PasswordResetService.resetPassword({
                email: email.value,
                password: password.value,
                token: props.token
            })
            .then(() => {
                router.push({ name: 'auth' })
                notify({
                    title: "Sucesso!",
                    text: "Nova Senha cadastrada com sucesso!",
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
            resetPassword,
            email,
            password,
            loading
        }

    }
}
</script>