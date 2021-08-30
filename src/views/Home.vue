<template>
  <div class="container-fluid container-home flex-grow-1 p-0">
    <headercomponent></headercomponent>
    <section class="section-onglets mt-3">
      <div class="container">
        <div class="row">
          <div class="d-none d-md-flex col-md-5">
            <img class="img-fluid img-code-icon" src="../assets/logos/code-icon.png" alt="icone-code">
          </div>
          <div class="col-12 col-md-7 d-flex flex-column justify-content-center mt-3 mb-3">
            <h2 class="text-center text-white">Mon Experience</h2>
            <ul data-aos="fade-up"
                  data-aos-delay="200" 
                  data-aos-duration="1000" class="text-center list-unstyled d-flex flex-column flex-sm-row mt-3 mb-xs-1 mb-sm-2"
            >
              <li class="nav-link btn btn-onglet flex-fill active" v-on:click="component = 'onglet1'">Presentation</li>
              <li class="nav-link btn btn-onglet flex-fill active" v-on:click="component = 'onglet2'">Experiences professionnelles</li>
              <li class="nav-link btn btn-onglet flex-fill active" v-on:click="component = 'onglet3'">Formation & diplômes</li>
            </ul>
            <div class="data-anchor">
              <div data-aos="fade-up"
                  data-aos-delay="200" 
                  data-aos-duration="1000" 
                  class="card onglets">
                <transition name="component-fade" mode="out-in">
                  <component v-bind:is="component" class=""></component>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid w-md-80 container-langues pt-5">
      <h2 class="text-center">Mes Compétences</h2>
      <div class="row mt-5 ml-lg-3 mr-lg-3 ml-xl-5 mr-xl-5">
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <div>
                <icon-base width="50" height="50" viewBox="0 0 50 50" iconColor="#fb8500" icon-name="IconHtml"><icon-html/></icon-base>
                <icon-base width="55" height="55" viewBox="0 0 50 50" iconColor="#0077B6" icon-name="IconCss"><icon-css/></icon-base>
              </div>
              <h5 class="card-title">HTML5 - CSS3</h5>
              <p class="card-text">Bases solides en ce qui concerne le contenu, balisage, et présentation du contenu.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso" >
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="50" height="50" viewBox="0 0 50 50" iconColor="#787cb4" icon-name="IconPhp"><icon-php/></icon-base>
              <h5 class="card-title">PHP 7</h5>
              <p class="card-text">Très bonnes bases en PHP. Langage étudié pendant la formation et utilisé en stage.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="50" height="50" viewBox="0 0 50 50" iconColor="#f7e018" icon-name="IconJavascript"><icon-javascript/></icon-base>
              <h5 class="card-title">Javascript</h5>
              <p class="card-text">Bonnes bases en JS natif. Langage actuellement étudié afin de progrésser.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="70" height="70" viewBox="0 0 40 30" iconColor="#3fb984" icon-name="IconVue"><icon-vue/></icon-base>
              <h5 class="card-title">Vue.js</h5>
              <p class="card-text">Framework en cours d'apprentissage ! Ce portefolio est fait en Vue.js SPA.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="80" height="80" viewBox="0 0 40 30" iconColor="#2e7d32" icon-name="IconNode"><icon-node/></icon-base>
              <h5 class="card-title">Nuxt.js / Node.js / Express.js </h5>
              <p class="card-text">La prochaine étape après avoir progréssé avec Vue.js.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="50" height="50" viewBox="0 0 50 50" iconColor="#000000" icon-name="IconSymfony"><icon-symfony/></icon-base>
              <h5 class="card-title">Symfony</h5>
              <p class="card-text">Projet de fin d'année réalisé avec Symfony 5. Le stage de fin de formation s'est déroulé sur Symfony 3.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="50" height="50" viewBox="0 0 50 50" iconColor="#f29111" icon-name="IconMysql"><icon-mysql/></icon-base>
              <h5 class="card-title">MySQL / Doctrine</h5>
              <p class="card-text">Langages et ORM utilisés au cours de la formation.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso" >
            <div class="card-body d-flex flex-column align-items-start">
              <h5 class="card-title">MongoDb</h5>
              <p class="card-text">A étudier.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card card-perso">
            <div class="card-body d-flex flex-column align-items-start">
              <icon-base width="50" height="50" viewBox="0 0 50 50" iconColor="#1b1f23" icon-name="IconGithub"><icon-github/></icon-base>
              <h5 class="card-title">Github</h5>
              <p class="card-text">J'utilise Github quotidiennement pour progresser en versionning et être prêt au travail collaboratif.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="d-flex justify-content-around mt-5">
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
    </section> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../components/layout/TheHeader.vue'
import ContactForm from '../components/forms/Contact.vue'
import Onglet1 from '../components/Onglet1.vue' 
import Onglet2 from '../components/Onglet2.vue' 
import Onglet3 from '../components/Onglet3.vue' 


export default {
  name: 'Home',
  data() {
    return {
      headercomponent: 'headercomponent',
      contactcomponent: 'contact',
      component: 'onglet1',
      toggleHeader: true,
    }
  },
  components: {
  //   'Appear' : Appear
    'headercomponent': TheHeader,
    'contact': ContactForm,
    'onglet1': Onglet1,
    'onglet2': Onglet2,
    'onglet3': Onglet3,
  },

}
</script>

<style>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.container-home {
    background: linear-gradient(163deg, rgba(192,192,192,1) 0%, rgba(235,235,235,1) 49%); 

}

.img-profil{
  height: 500px;
  border-radius: 10px;
}

.container-langues {
  min-height: 500px;
    background: linear-gradient(163deg, rgba(192,192,192,1) 0%, rgba(235,235,235,1) 49%); 
}

.card-perso {
  min-height: 255px;
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

.section-onglets {
  min-height: 250px;
  background: linear-gradient(163deg, rgba(0,78,152,1) 0%, rgba(58,110,165,1) 84%); 
}

.onglets {
  /* min-height: 230px; */
  color: white;
  background: none;
  border: none !important;
}

.btn-onglet {
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
}
.btn-onglet:hover {
  color: white;
  background-color: #FF6700;
}
/* .btn-onglet:active {
  background-color: #1282A2;
} */

.img-code-icon {
  max-height: 300px;
}



</style>