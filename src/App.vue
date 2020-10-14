<template>
  <Header/>
  <Flash :flashInfo="flashInfo"/>
  <Button
    buttonText="Get News"
    @click="$store.dispatch('getNews')"/>
  <ArticleList :items="$store.getters.newsList"/>
  <About/>
  <Footer/>
</template>

<script>
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import Flash from './components/Flash.vue'
import Button from './components/Button.vue'
import ArticleList from './components/Article/List.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Button,
    ArticleList,
    About,
    Footer,
    Flash
  },
  computed: {
    flashInfo() {
      return this.$store.getters.flashInfo;
    }
  }
})
</script>