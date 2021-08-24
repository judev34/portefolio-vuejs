<template>
  <div class="container mt-3 flex-grow-1">
    <div class="row">
      <div class="col-sm-12 col-md-6 d-flex-column mt-auto mb-auto">
        <vue-typed-js 
          :loop="true" 
          :typeSpeed="80"
          :backSpeed="50"
          :startDelay="2000"
          :strings="['un dev', 'motivé']">
          <Appear :transition="['-100px',0]" :delay="100">
            <h1 class="ml-auto mr-auto ml-md-0 mr-md-0">Hello, Je suis <span class="typing"></span></h1>
          </Appear>
        </vue-typed-js>
        <Appear :transition="['-100px',0]" :delay="200">
          <p class="d-md-flex text-md-left">Salut, Je m'apelle Julien, je suis un developpeur web junior fraîchement sortie d'une formation de développeur web & web mobile</p>
        </Appear>
        <Appear :transition="[0,'50px']" :delay="400">
          <button class="btn btn-dark d-md-flex align-items-start">Contactez-moi</button>
        </Appear>
      </div>
      <div class="col-sm-12 col-md-6 mt-sm-3 mt-3 mt-md-0">
        <Appear :transition="['100px',0]" :delay='500'>
          <img class="img-profil img-fluid" src="../assets/trombine.jpg" alt="ma figure">
        </Appear>
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
  // components: {
  //   'Appear' : Appear
  // }

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

@media screen and (max-width: 560px) {
  .img-profil {
    height: 300px !important;
  }
}


</style>