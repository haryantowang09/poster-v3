<template>
  <nav class="header-container">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 5px solid red;
}
.header-container > img {
  width: 60px;
  height: 60px;
}
.header-container > ul {
  display: flex;
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