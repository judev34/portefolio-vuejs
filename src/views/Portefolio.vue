<template>
  <section class="container-fluid w-md-80 container-langues pt-5">
      <h2 class="text-center">Mes Réalisations</h2>
      <div class="row mt-5 ml-lg-3 mr-lg-3 ml-xl-5 mr-xl-5 mb-5">
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-real-perso">
            <div class="card-body d-flex flex-column">
                <img src="../assets/alimenjeux.png" class="card-img-top" alt="banniere-alimenjeux">
                <h5 class="card-title text-center mt-3">Alim'enjeux</h5>
                <p class="card-text">Réalisation de la partie Front-End du site Alim'Enjeux dans le respect de la maquette fournie par le designer</p>
                <a href="https://alim-enjeux.org/" class="text-center">Visiter le site internet</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-real-perso" >
            <div class="card-body d-flex flex-column">
                <img src="../assets/emmausEurope.png" class="card-img-top card-img-perso" alt="banniere-emmausEurope">
                <h5 class="card-title text-center mt-3">Emmaüs Europe</h5>
                <p class="card-text">Participation à la réalisation de la partie Front-End du site d'Emmaüs Europe.</p>
                <a href="https://emmaus-europe.org/" class="text-center">Visiter le site internet</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-real-perso">
            <div class="card-body d-flex flex-column align-items-start">
              
              <h5 class="card-title">La Boutique Française</h5>
              <p class="card-text">Petit projet de boutique de vêtements pour apprendre Symfony 5</p>
              <p class="card-text">Deploiement à venir</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-real-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 class="card-title">Bibliotèque en PHP</h5>
              <p class="card-text">Cours Udemy sur le PHP MVC, réalisation d'un CRUD</p>
              <p class="card-text">Deploiement à venir</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-real-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <h5 class="card-title">Cyberpark</h5>
              <p class="card-text">Projet personnel Parc d'attraction en Symfony 5.3</p>
              <p class="card-text">Développement en cours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'Portefolio'
}
</script>

<style>
.card-real-perso {
    min-height: 300px;
}

.card-img-perso {
    max-height: 100px;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
}
</style>