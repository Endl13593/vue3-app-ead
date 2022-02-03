<template>
  <div>
    <header-component />

    <section>
      <router-view></router-view>
    </section>

    <footer-component />
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import HeaderComponent from "@/layouts/components/HeaderComponent.vue";
import FooterComponent from "@/layouts/components/FooterComponent.vue";

export default {
  name: "DefaultComponent",

  components: { HeaderComponent, FooterComponent },

  setup() {
    onBeforeMount(() => {
      document.body.classList.add('page')
      document.body.classList.add('dark')

      document.title = 'Curso EAD com Vue.js 3'
    })
  }
};
</script>