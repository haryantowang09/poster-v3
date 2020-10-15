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
import { defineComponent, ref, computed } from 'vue';
import { ENUM_SUCCESS, ENUM_ERROR, ENUM_WARN } from '../constants.js';

export default defineComponent({
  name: 'Flash',
  props: {
    flashInfo: {
      type: Object
    },
    showFlash: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const show = ref(false);
    const flashClassType = computed(function() {
      return {
        'flash-success': props.flashInfo.type === ENUM_SUCCESS,
        'flash-error': props.flashInfo.type === ENUM_ERROR,
        'flash-warn': props.flashInfo.type === ENUM_WARN
      }
    });
    

    return {
      show,
      flashClassType
    }
  },
})
</script>

<style scoped>
.flash-container {
  color: #FFF;

}
.flash-success {
  background-color: var(--flash-bg-success);
  border: 1px solid green;
}
.flash-error {
  background-color: var(--flash-bg-error);
  border: 1px solid red;
}
.flash-warn {
  background-color: var(--flash-bg-warn);
  border: 1px solid cyan;
}

/* Animation */
/* not working yet wtf */
.fade-enter-active .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter .fade-leave-to {
  opacity: 0;
}
</style>