<template>
  <button
    :type="this.buttonType"
    class="button-style"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
