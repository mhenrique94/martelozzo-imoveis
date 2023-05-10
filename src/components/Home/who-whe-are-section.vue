<template>
  <v-container class="main" id="who-we-are">
    <h2 class="text-h2 mb-10">Quem somos</h2>
    <div class="d-flex flex-row">
      <v-container class="text-content">
        <p>
          Na Martelozzo Móveis Planejados, somos uma equipe de fabricantes de
          móveis apaixonados e dedicados a criar peças bonitas, funcionais e
          personalizadas para nossos clientes. Acreditamos que móveis devem ser
          mais do que apenas um item funcional em sua casa ou escritório; eles
          devem ser uma expressão do seu estilo e personalidade únicos.
        </p>
        <p>
          Esteja você procurando por uma mesa de jantar personalizada, uma
          estante de livros única ou uma mesa de escritório exclusiva para sua
          casa, estamos comprometidos em fornecer o melhor produto e serviço
          possível. Entre em contato conosco hoje para saber mais sobre nossas
          opções de móveis personalizados e começar a criar sua peça dos sonhos.
        </p>
      </v-container>
      <v-container class="image-content" />
    </div>

    <v-container class="grid-wrapper">
      <v-card class="gw-card">
        <div class="gwc-content">
          <h4>Projetos sob medida</h4>
          <p>
            Nossos projetos são sob medida, sempre otimizando seu espaço interno
            e ajudando na composição do design do ambiente
          </p>
        </div>
      </v-card>
      <v-card class="tall">
        <v-img
          cover
          src="https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </v-card>
      <v-card class="wide">
        <v-img
          cover
          src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </v-card>
      <v-card class="tall">
        <v-img
          cover
          src="https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </v-card>
      <v-card class="gw-card">
        <div class="gwc-content">
          <h4>Matérias-primas</h4>
          <p>
            Materiais feitos de fibras de madeira prensadas em altas
            temperaturas com resinas combinadas para manter a resistência e
            qualidade final da peça
          </p>
        </div>
      </v-card>
      <v-card class="tall">
        <v-img
          cover
          src="https://images.pexels.com/photos/373541/pexels-photo-373541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </v-card>
      <v-card class="gw-card">
        <div class="gwc-content">
          <h4>Entrega e montagem</h4>
          <p>
            Equipe treinada para a perfeita e cuidadosa instalação em seu
            ambiente, levando em consideração demais componentes e quinas
            presentes
          </p>
        </div>
      </v-card>
      <v-card class="gw-card">
        <div class="gwc-content">
          <h4>Pagamento facilitado</h4>
          <p>
            Oferecemos os principais métodos de pagamento, sempre facilitado e
            flexível
          </p>
        </div>
      </v-card>
    </v-container>
  </v-container>
</template>
<style scoped>
.main {
  justify-content: space-evenly;
  padding-top: 80px;
}
.text-content {
  width: 100%;
}
.image-content {
  width: 70%;
  background: url("../../assets/images/hero.jpg");
  background-size: cover;
}

.gw-card {
  padding: 16px;
}
.grid-wrapper > gw-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-wrapper > gw-card > gwc-content {
  border-radius: 5px;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  margin-top: 80px;
}
.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
