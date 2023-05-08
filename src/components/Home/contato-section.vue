<template>
  <div class="full-height contact-bg pa-10" id="contato">
    <h2 class="text-h2 mb-10">Contato</h2>
    <div class="contact-container">
      <div class="cc-inputs">
        <div class="cc-content">
          <v-form v-model="valid">
            <v-container class="form">
              <v-text-field v-model="name" label="Nome" required></v-text-field>
              <v-text-field
                v-model="phone"
                label="Celular"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-container>
          </v-form>
        </div>
      </div>
      <div class="cc-address">
        <div class="cc-content">
          <p>
            Endereço
            <br />Votorantim, SP,
            <br />
          </p>
          <p>Telefone <br />(15) 98163-0646</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    phone: "",
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
  }),
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: row;
  min-height: 40vh;
  border-radius: 8px;
}

.contact-bg {
  background: url("https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
}

.cc-inputs {
  background-color: whitesmoke;
  width: 100%;
  padding: 24px;
}

.cc-content {
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cc-address {
  background-color: brown;
  width: 80%;
  padding: 24px;
  background: url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80");
  background-size: cover;
}
</style>
