<template>
<nav>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/" exact>PorteFolio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact exact-active-class="active">Accueil</b-nav-item>
        <b-nav-item to="/actualites" exact exact-active-class="active">Actualités</b-nav-item>
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