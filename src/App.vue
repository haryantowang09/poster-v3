<template>
  <section>
    <Header msg="Welcome to basic Vue Post Website"/>
    <div v-for="(item, index) of items" :key="index">
      <Article
        :addPaddingTopValue="(index%2 === 0) ? false : true"
        :title="item.title"
        :createdAt="item.createdAt"
        :htmlContent="item.htmlContent"/>
    </div>
  </section>
</template>

<script>
import Header from './components/Header.vue'
import Article from './components/Article.vue'

export default {
  name: 'App',
  components: {
    Header,
    Article
  },
  data () {
    return {
      items: [{
        title: 'Pen',
        createdAt: new Date(),
        htmlContent: `
          <p>I have a pen</p>
          <p>I have an apple</p>
        `
      }, {
        title: 'Apple',
        createdAt: new Date(),
        htmlContent: `
          <span>I have an apple</span>
        `
      }]
    }
  }
}
</script>

<style>
section {
  width: 100%;
  color: #2c3e50;
}
</style>
