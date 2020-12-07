<template>
  <section class="article-container">
    <!-- <div v-for="(news, index) of newsList" :key="index">
      <a :href="news.url">
        <img class="article-image" :src="news.urlToImage"/>
      </a>
      <h1>{{ news.title }}</h1>
      <div>Author: {{ news.author}}</div>
      <div>Published At: {{ Date(news.publishedAt) }}</div>
      <div>{{ news.content }}</div>
    </div> -->
    <div v-for="index in 5" :key="index">
      <div class="wrap"/>
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
    }
  }
})
</script>

<style scoped>
.article-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}
.article-container.sample {
  background: gold;
  padding: 5px;
  
  margin: 10px;
}
.article-container.wrap {
}
.article-image {
  width: 120px;
  height: 60px;
}
</style>