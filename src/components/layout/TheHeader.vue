<template>
      <section class="container header-container d-flex flex-column flex-md-row justify-content-center mt-md-5 mb-md-5">
        <div class="col-sm-12 col-md-6 d-flex-column mt-auto mb-auto ">
          <Appear :transition="['-100px',0]" :delay="100">
            <h1 class="ml-md-0 mr-md-0 text-center text-md-left display-md-3">Hello, Je m'appelle Julien</h1>
          </Appear>
          <Appear :transition="['-100px',0]" :delay="200">
            <p class="d-md-flex text-center text-md-left bienvenue">Je suis un developpeur web junior fraîchement sortie d'une formation de développeur web & web mobile. En Route pour le Bachelor !</p>
          </Appear>
          <div class="d-flex justify-content-center justify-content-md-start">
            <Appear :transition="[0,'50px']" :delay="400">
              <button class="btn btn-dark" to="/contact" exact exact-active-class="active" disabled>Contactez-moi</button>
            </Appear>
          </div>
        </div>
    
        <div class="col-sm-12 col-md-6 mt-sm-3 mt-3 mt-md-0 d-flex justify-content-center align-items-center">
          <Appear :transition="['100px',0]" :delay='500'>
            <img class="img-profil img-fluid" src="../../assets/trombine.jpg" alt="ma figure">
          </Appear>
        </div>  
      </section>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>

.header-container {
  min-height: 800px;
}

.img-profil{
  height: 500px;
  border-radius: 10px;
}

.bienvenue {
    font-size: 1.5rem;
}

@media screen and (max-width: 560px) {
  .img-profil {
    height: 300px !important;
  }
}

</style>