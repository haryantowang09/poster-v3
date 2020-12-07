<template>
  <div>
    <transition name="fade">
      <div v-show="showFlash" class="flash-container">
        <div :class="flashClassType">
          {{ flashInfo.message }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { ENUM_SUCCESS, ENUM_ERROR, ENUM_WARN } from '../constants.js';

export default defineComponent({
  name: 'Flash',
  props: {
    flashInfo: {
      type: Object
    }
  },
  data () {
    return {
      showFlash: false,
    }
  },
  setup(props) {
    const flashClassType = computed(() => {
      return {
        'mod-success': props.flashInfo.type === ENUM_SUCCESS,
        'mod-error': props.flashInfo.type === ENUM_ERROR,
        'mod-warn': props.flashInfo.type === ENUM_WARN
      }
    });
    
    return {
      flashClassType
    }
  },
})
</script>

<style scoped>
.flash-container {
  color: #FFF;
  width: 100%;
}
.mod-success {
  background-color: var(--flash-bg-success);
}
.mod-error {
  background-color: var(--flash-bg-error);
}
.flash-container > .mod-warn {
  background-color: var(--flash-bg-warn);
}
</style>