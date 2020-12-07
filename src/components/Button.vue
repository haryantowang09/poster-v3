<template>
  <button
    :type="this.buttonType"
    class="button-style">
    {{ buttonText }}
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    buttonType: {
      type: String,
      default: 'button'
    },
    buttonText: {
      type: String,
      default: 'ButtonText'
    }
  }
})
</script>

<style scoped>
button {
  width: 170px;
  height: 45px;
  background-color: var(--button-primary);
  border-style: none;
  border-radius: 12px;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
}
button:active {
  opacity: 80%;
}
</style>
