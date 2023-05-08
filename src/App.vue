<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <v-app-bar class="app-bar" fixed flat app height="80" dark>
      <span class="font-2">Martelozzo Móveis</span>
      <v-spacer />
      <div class="d-flex align-center">
        <v-btn
          style="text-transform: none"
          class="font-7 white--text"
          plain
          href="#inicio"
          >Inicio</v-btn
        >
        <v-btn
          style="text-transform: none"
          class="font-7 white--text"
          plain
          href="#portfolio"
          >Portfolio</v-btn
        >
        <v-btn
          style="text-transform: none"
          large
          class="font-7 brown white--text"
          href="#contato"
          >Contato</v-btn
        >
      </div>
      <v-app-bar-nav-icon class="d-flex d-sm-none" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer class="bg-1">
      <v-container>
        <div class="d-sm-none d-md-flex">
          <v-row no-gutters style="" class="footer d-none d-sm-flex">
            <p class="font-7">
              © 2023 Martelozzo Imóveis
              <br />Desenvolvido por Maniva Software
            </p>
          </v-row>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
.app-bar {
  backdrop-filter: blur(5px);
  width: 100%;
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
</style>
