<template lang="pug">
nav.header-container
  img(alt="Vue logo" src="../assets/logo.png")
  ul
    li
      Button(buttonText="Get News" @click="$store.dispatch('getNews')")
    li
      a(href="#about")
      | About
</template>

<script>
import { defineComponent } from 'vue'
import Button from './Button'

export default defineComponent({
  name: 'Header',
  components: {
    Button
  }
});
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid red;
  padding: 1em;
}
.header-container > img {
  width: 60px;
  height: 60px;
}
.header-container > ul {
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
}
.header-container > ul > li {
  margin-left: 1em;
}
.header-container > ul > li > a {
  color: black;
  text-decoration: none;
}
.header-container > ul > li > a:hover {
  text-decoration: underline;
}
</style>