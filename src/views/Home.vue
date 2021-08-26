<template>
  <div class="container-fluid mt-3 flex-grow-1 p-0">
    <headercomponent></headercomponent>
    <section class="section-onglets mt-3 bg-dark">
      <div class="container">
        <div class="row">
          <div class="d-none d-md-flex col-md-5">
            <img class="img-fluid img-code-icon" src="../assets/logos/code-icon.png" alt="icone-code">
          </div>
          <div class="col-12 col-md-7 d-flex flex-column justify-content-center mt-3 mb-3">
            <ul data-aos="zoom-out-up"
                  data-aos-delay="200" 
                  data-aos-duration="1000" class="text-center list-unstyled d-flex flex-column flex-sm-row mt-3 mb-xs-1 mb-sm-2"
            >
              <li class="nav-link btn btn-onglet flex-fill active" v-on:click="component = 'onglet1'" >Presentation</li>
              <li class="nav-link btn btn-onglet flex-fill active" v-on:click="component = 'onglet2'">Experiences professionnelles</li>
              <li class="nav-link btn btn-onglet flex-fill active" v-on:click="component = 'onglet3'">Formation & diplômes</li>
            </ul>
            <div class="data-anchor">
              <div data-aos="zoom-out-up"
                  data-aos-delay="200" 
                  data-aos-duration="1000" 
                  class="card onglets">
                <transition name="component-fade" mode="out-in">
                  <component v-bind:is="component" class="p-2 "></component>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="d-flex justify-content-around mt-5">
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
    </section>
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

.section-onglets {
  min-height: 250px;
}

.onglets {
  min-height: 230px;
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
  background-color: #1282A2;
}
/* .btn-onglet:active {
  background-color: #1282A2;
} */

.img-code-icon {
  max-height: 300px;
}



</style>