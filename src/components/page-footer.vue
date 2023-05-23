<template>
  <v-footer class="bg-1">
    <v-container>
      <hr />
      <div class="d-flex mt-6 justify-space-between">
        <div>
          <p class="mb-2">© 2023 Marcenaria Martelozzo Móveis Planejados</p>
          <p class="text-subtitle-2">
            <a href="https://manivasoft.com">
              Desenvolvido por Maniva Software
            </a>
          </p>
        </div>
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
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: "pageFooter",
};
</script>
<style scoped>
.footer {
  padding: 4%;
}

a {
  color: black;
}

a:visited {
  color: black;
}

a:hover {
  color: #795548;
}

.apps {
  display: flex;
  gap: 8px;
}
</style>
