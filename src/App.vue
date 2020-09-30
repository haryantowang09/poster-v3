<template>
  <Header/>
  <Button buttonText="Refresh News List" @click="inc()"/>
  <h1>
    Clicked {{ countState.count }} times.
  </h1>
  <ArticleList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { clickStore } from './store/click-store'

import Header from './components/Header.vue'
import Button from './components/Button.vue'
import ArticleList from './components/Article/List.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Button,
    ArticleList
  },
  setup() {
    const inc = () => {
      clickStore.incrementCount()
      clickStore.getState().count++ // should throw a warning and don't mutate the store
    }

    return {
      countState: clickStore.getState(),
      inc
    }
  }
})
</script>
