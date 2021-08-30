<template>
<nav>
  <b-navbar class="navbar-perso navbar-dark" toggleable="lg" >
    <b-navbar-brand to="/" exact>PorteFolio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link 
          to="/" 
          custom
          v-slot="{ href, navigate, isActive}"
        ><b-nav-item 
            :active="isActive" 
            :href="href"
            @click="navigate"
            >Accueil</b-nav-item>
        </router-link> 
        <router-link
          to="/portefolio" 
          custom
          v-slot="{ href, navigate, isActive}"
        ><b-nav-item 
            :active="isActive" 
            :href="href"
            @click="navigate"
            >Portefolio</b-nav-item>
        </router-link>
        <router-link
          to="/contact" 
          custom
          v-slot="{ href, navigate, isActive}"
        ><b-nav-item 
            :active="isActive" 
            :href="href"
            @click="navigate"
            >Contact</b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</nav> 
</template>

<script>
export default {
    name: 'TheNavigation'
}
</script>

<style>
.navbar-perso {
  background: rgb(0,78,152);
  color: white !important;
}

.navbar-brand {
  color: white;
}

</style>