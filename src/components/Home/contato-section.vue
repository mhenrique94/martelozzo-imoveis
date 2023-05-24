<template>
  <div class="full-height contact-bg" id="contato">
    <h2 class="text-h2 mb-10">Contato</h2>
    <div class="contact-container">
      <div class="cc-inputs">
        <div class="cc-content" v-if="!emailSent">
          Preencha e entraremos em contato!
          <v-form v-model="valid" @submit.prevent="submitForm">
            <v-container class="form">
              <input
                type="hidden"
                name="_next"
                value="https://www.martelozzo.com.br"
              />
              <input
                type="hidden"
                name="_subject"
                value="Solicitação de contato"
              />
              <input type="hidden" name="_captcha" value="false" />
              <v-text-field
                v-model="name"
                label="Nome"
                name="fullname"
                required
              ></v-text-field>
              <v-text-field
                name="phone"
                v-model="phone"
                label="Celular"
                required
              ></v-text-field>
              <v-text-field
                name="email"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>
              <v-btn block color="brown" type="submit">Enviar</v-btn>
            </v-container>
          </v-form>
        </div>
        <div class="email-sent" v-else>
          Dados enviados! Em breve entraremos em contato.
        </div>
      </div>
      <div class="cc-address">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?hl=en&amp;q=Marcenaria Martelozzo&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe
            ><a href="https://embed-googlemap.com"
              >google maps code generator</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addDoc, collection, db } from "../../firebase/config";
export default {
  data: () => ({
    valid: false,
    name: "",
    phone: "",
    email: "",
    emailSent: null,
    emailRules: [
      (value) => {
        if (value) return true;

        return "Campo obrigatório!.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail tem que ser válido.";
      },
    ],
    rules: {
      required: (value) => !!value || "Campo obrigatório!",
    },
  }),
  methods: {
    async submitForm() {
      const message = {
        name: this.name,
        phone: this.phone,
        email: this.email,
      };

      try {
        await addDoc(collection(db, "solicitacoesContato"), message);
      } catch (e) {
        console.error("Error adding document: ", e);
      } finally {
        this.emailSent = true;
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: row;
  min-height: 40vh;
  border-radius: 8px;
  justify-content: center;
}

.contact-bg {
  background: url("https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  padding: 16px;
}

.cc-inputs {
  background-color: whitesmoke;
  width: 100%;
  padding: 16px;
  max-width: 400px;
}

.email-sent {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 18pt;
  text-align: center;
}

.cc-content {
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 100%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 100%;
}
.gmap_iframe {
  width: 100% !important;
  height: 100% !important;
}

@media (max-width: 600px) {
  .cc-address {
    height: auto !important;
  }

  .contact-container {
    flex-wrap: wrap;
  }
}

@media (max-width: 800px) {
  .cc-inputs {
    max-width: 100%;
  }

  .cc-address {
    width: 100%;
    height: 100%;
  }

  .contact-bg {
    padding: 16px;
    justify-content: center;
  }
}
</style>
