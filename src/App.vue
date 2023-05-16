<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <navigation-bar class="navigation-bar" />
    <v-main>
      <router-view />
    </v-main>

    <v-footer class="bg-1">
      <v-container>
        <hr />
        <div class="mt-6">
          <p>
            © 2023 Martelozzo Imóveis
            <br />Desenvolvido por Maniva Software
          </p>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import navigationBar from "./components/navigation-bar.vue";
export default {
  components: { navigationBar },
  name: "App",
  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

.logotipo {
  font-family: "Raleway", sans-serif;
}

.full-height {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer {
  padding: 4%;
}

.navigation-bar {
  z-index: 2000;
}
</style>
