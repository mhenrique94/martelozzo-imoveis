<template>
  <div>
    <hero />
    <portfolio />
    <contato />
    <quemSomos />
    <whatsapp class="whatsapp" />
  </div>
</template>

<script>
import hero from "../components/Home/hero-section.vue";
import whatsapp from "../components/Home/whatsapp-snippet.vue";
import portfolio from "../components/Home/portfolio-section.vue";
import contato from "../components/Home/contato-section.vue";
import quemSomos from "../components/Home/who-whe-are-section.vue";

export default {
  name: "HomePage",

  components: {
    hero,
    portfolio,
    contato,
    quemSomos,
    whatsapp,
  },
};
</script>
<style>
.whatsapp {
  position: fixed;
  right: 10px;
  bottom: 10%;
}
</style>
