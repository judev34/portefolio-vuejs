<template>
  <div class="actualites container-fluid mt-3 flex-grow-1">
    <div class="">
      <h1>Bienvenue sur mon fil d'actus</h1>
      <div v-if="errored">
        <p>Nous sommes désolés, les actus sont indisponibles pour l'instant. Veuillez réessayer ultérieurement.</p>
      </div>
      <div v-if="loading">Chargement...</div>
      <div class="row mt-5 d-flex justify-content-around">
        <div class="col-12 col-md-5 mb-5" 
          v-bind:key="index" 
          v-for="(article, index) in allArticles"
        >
        <!-- <Appear :transition="[0,'50px']" :delay="100 * index + 1"> -->
          <h4>{{ article.title }}</h4>
          <p> {{ article.description}}</p>
          <a v-bind:href="article.url">Voir l'article</a>
          <p>{{ article.publishedAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Actualites',
  data() {
    return {
      allArticles: [],
      loading: true,
      errored: false,
    }
  },
  created() {
    axios
    .get('https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=7a3ea076059d49a982c44f6a4e0875a7') 
    .then(reponse => {
      // console.log(reponse);
      console.log(reponse.data.articles);
      for (const articlePost of reponse.data.articles) {
        console.log(articlePost);
        this.allArticles.push(articlePost);
      }
    })
    .catch(error => {
        console.log(error)
        this.errored = true
    })
    .finally(() => this.loading = false)
  } 
}
</script>

<style>



</style>