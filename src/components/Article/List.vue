<template>
  <section class="article-container">
    <div v-for="(item, index) of items" :key="index">
      <Article
        :addPaddingTopValue="(index%2 === 0) ? false : true"
        :title="item.title"
        :createdAt="item.createdAt"
        :htmlContent="item.htmlContent"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Article from './Item.vue';

export default defineComponent({
  name: 'ArticleList',
  components: {
    Article
  },
  props: {
    items: {
      type: Array,
      default: () => [{
        'title': 'This is where you put the Article Title',
        'createdAt': new Date(),
        'htmlContent': `<span>I have a pen and apple. What should I do now, Pikotaro-san ?</span>`
      }]
    }
  }
})
</script>