<template>
  <section class="article-container">
    <div v-for="(news, index) of newsList" :key="index">
      <div :class="addPaddingTop">
        <a :href="news.url">
          <img class="article-image" :src="news.urlToImage"/>
        </a>
        <h1>{{ news.title }}</h1>
        <div>Author: {{ news.author}}</div>
        <div>Published At: {{ Date(news.publishedAt) }}</div>
        <div class="article-content">{{ news.content }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticleList',
  computed: {
    newsList() {
      return this.$store.getters.newsList
    },
    addPaddingTop() {
      return {
        'mgt-30': true,
      }
    }
  }
})
</script>

<style scoped>
.article-container.mgt-30 {
  background-color: cyan;
  margin-top: 30px;
}
.article-image {
  width: 60px;
  height: 60px;
}
.article-content {
  padding: 5px;
}
</style>