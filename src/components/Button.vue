
<script setup>
import { ref } from 'vue'
  // import { useInput } from '@/composables/useInput.js'

  // const [ input ] = useInput()
  defineProps(['email'])

  const btnActive = ref(false)

</script>

<template>
  <!-- <div class="input"> -->
    <button class="btn" 
      :class="btnActive ? 'active' : ''"
      @mouseover="btnActive = true"
      @mouseout="btnActive = false">Email: {{ email }}</button>
  <!-- </div> -->
</template>


<style scoped>
  .btn {
    height: 36px;
    width: 100%;
    padding: 6px 12px;
    border-radius: 8px;
    background-color: #546dd1;
    color: #fff;
    box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 1);
  }
  .btn:hover {
    cursor: pointer;
  }

  .btn.active {
  animation: bounce-in .8s;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>