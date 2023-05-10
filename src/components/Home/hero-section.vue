<template>
  <div id="inicio">
    <v-row align="center" justify="center" class="hero" no-gutters>
      <v-col cols="12" xl="2" lg="2" />
      <v-col cols="12" xl="8" lg="8">
        <v-container class="hero-container full-height logotipo">
          <h1 class="text-h2 bg-brown pa-3">Martelozzo Móveis Planejados</h1>
          <p class="text-h3 text-white copacity">
            Transformando seu espaço, uma peça de cada vez
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
<style>
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

@media screen and (max-width: 600px) {
  .hero {
    background: url("../../assets/images/hero.jpg");
    background-size: cover;
    padding: 5%;
    width: 100%;
  }
}
</style>
