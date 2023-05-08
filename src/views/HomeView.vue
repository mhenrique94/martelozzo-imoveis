<template>
  <div>
    <hero />
    <portfolio />
    <contato />
  </div>
</template>

<script>
import hero from "../components/Home/hero-section.vue";
import portfolio from "../components/Home/portfolio-section.vue";
import contato from "../components/Home/contato-section.vue";

export default {
  name: "HomePage",

  components: {
    hero,
    portfolio,
    contato,
  },
};
</script>
<style></style>
