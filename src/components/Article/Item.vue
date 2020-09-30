<template>
  <div class="article-container" :class="addPaddingTop">
    <h1>{{ title }}</h1>
    <small>{{ createdAt.toLocaleString() }}</small>
    <div class="article-html-content" v-html="htmlContent"/>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    addPaddingTopValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    createdAt: {
      type: Date,
      default: () => {
        return new Date()
      }
    },
    htmlContent: {
      type: String
    }
  },
  data () {
    return {
      oddIndex: false
    }
  },
  computed: {
    addPaddingTop() {
      return {
        'add-top-30' : this.addPaddingTopValue,
      }
    }
  }
}
</script>

<style type="text/css">
.article-container {
  background-color: pink;
}
.article-container.add-top-30 {
  padding-top: 30px;
}
.article-html-content {
  padding: 5px;
}
</style>