<template>
<nav>
  <b-navbar toggleable="lg" type="dark" variant="dark">
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
          to="/actualites" 
          custom
          v-slot="{ href, navigate, isActive}"
        ><b-nav-item 
            :active="isActive" 
            :href="href"
            @click="navigate"
            >Actualités</b-nav-item>
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

</style>