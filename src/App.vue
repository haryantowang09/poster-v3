<template lang="pug">
Header
Flash(:flashInfo="flashInfo")
ArticleList(:items="$store.getters.newsList")
BottomSheet
</template>

<script>
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import Flash from './components/Flash.vue'
import ArticleList from './components/Article/List.vue'
import BottomSheet from './components/BottomSheet.vue'

export default defineComponent({
  components: {
    Header,
    ArticleList,
    Flash,
    BottomSheet
  },
  computed: {
    flashInfo() {
      return this.$store.getters.flashInfo;
    }
  }
})
</script>