<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <navigation-bar class="navigation-bar" />
    <v-main>
      <router-view />
    </v-main>
    <page-footer />
  </v-app>
</template>

<script>
import navigationBar from "./components/navigation-bar.vue";
import pageFooter from "./components/page-footer.vue";
export default {
  components: { navigationBar, pageFooter },
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
<style scoped>
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

.navigation-bar {
  z-index: 2000;
}
</style>

<style>
.full-height {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
