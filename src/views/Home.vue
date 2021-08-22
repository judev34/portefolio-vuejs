<template>
  <div class="container mt-3 flex-grow-1">
    <div class="row">
      <div class="col-sm-12 col-md-6 d-flex-column mt-auto mb-auto">
        <vue-typed-js 
          :loop="true" 
          :typeSpeed="80"
          :strings="['John', 'James']">
          <h1>Hey <span class="typing"></span></h1>
        </vue-typed-js>
        <p class="d-md-flex text-md-left">Salut, je suis un developpeur web junior fraîchement sortie d'une formation de développeur web & web mobile</p>
        <button class="btn btn-dark d-md-flex align-items-start">Contactez-moi</button>
      </div>
      <div class="col-sm-12 col-md-6 mt-sm-3">
        <img class="img-profil img-fluid" src="../assets/trombine.jpg" alt="ma figure">
      </div>
    </div>
    <div class="d-flex justify-content-around mt-5">
      <b-card
        title="Symfony"
        img-src="../assets/logos/symfonylogo.png"
        img-alt="logo"
        img-top
        tag="dev-language"
        class="img-fluid card-language"
      >
      </b-card>
      <b-card
        title="Vue.js"
        img-src="../assets/logos/logo.png"
        img-alt="logo"
        img-top
        tag="dev-language"
        class="img-fluid card-language"
      >
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>

.img-profil{
  height: 500px;
  border-radius: 10px;
}

.card-language {
  height: 300px;
  border: none !important;
}

.card-language > img {
  max-height: 100%;
  height: 200px;
}


</style>