
<script setup>
  import { useInput } from '@/composables/useInput.js'

  const [ input, updateInput ] = useInput()
</script>

<template>
  <div class="wrapper__input">
    <input class="input" type="text" placeholder="Enter here" :value="input" @input="updateInput($event.target.value)">
  </div>
</template>


<style scoped>
.wrapper__input {
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid rgb(64, 136, 136);
  background-color: #cac6c6;
  color: #000;
  width: 300px;
  }
  .input {
    outline: none;
    border: none;
    width: 100%;
    background-color: #cac6c6;
  }

</style>