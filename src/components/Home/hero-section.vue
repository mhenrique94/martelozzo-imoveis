<template>
  <div id="inicio">
    <v-row align="center" justify="center" class="hero" no-gutters>
      <div class="apps">
        <a
          href="https://api.whatsapp.com/send?phone=5515981630646&text=Ol%C3%A1!"
          ><v-icon icon="mdi-whatsapp" size="32"></v-icon
        ></a>
        <a href="https://www.facebook.com/Martelozzo"
          ><v-icon icon="mdi-facebook" size="32"></v-icon
        ></a>
        <a href="https://goo.gl/maps/6YaH5mctsMkS67Ct5?coh=178572&entry=tt"
          ><v-icon icon="mdi-google-maps" size="32"></v-icon
        ></a>
      </div>
      <v-col cols="12" xl="2" lg="2" />
      <v-col cols="12" xl="8" lg="8">
        <v-container class="hero-container full-height logotipo">
          <h1 class="text-h2 bg-brown pa-3">Martelozzo Móveis Planejados</h1>
          <p class="text-h3 text-white copacity">
            <!-- Transformando seu espaço, uma peça de cada vez -->
            Você sonha, nós construímos
          </p>
        </v-container>
      </v-col>
      <v-col cols="12" xl="2" lg="2" />
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  components: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

.logotipo {
  font-family: "Raleway", sans-serif;
}

.hero {
  background: url("../../assets/images/hero.jpg");
  background-size: cover;
  backdrop-filter: brightness(0%);
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
}

.bg-brown {
  background-color: #795548;
}

.copacity {
  backdrop-filter: blur(5px);
}

.apps {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px;
}

.apps > a {
  color: rgb(235, 235, 235);
}

.apps > a:hover {
  color: white;
}

@media screen and (max-width: 600px) {
  .hero {
    background: url("../../assets/images/hero.jpg");
    background-size: cover;
    padding: 5%;
    width: 100%;
  }
}
</style>
