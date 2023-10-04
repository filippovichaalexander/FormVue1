
<script setup>
  defineProps(['modelValue', 'passed'])
  defineEmits(['update:modelValue'])

</script>

<template>
  <div class="wrapper__input">
    <input class="input" 
      placeholder="Enter here" 
      type="email" 
      @input="$emit('update:modelValue', $event.target.value)">
      <div class="icon check" v-if="passed === 'passed'"></div>
      <div class="icon close" v-else-if="passed === 'unpassed'"></div>
      <div v-else></div>
  </div>
</template>


<style scoped>
    :root {
    --borderWidth: 7px;
    --height: 24px;
    --width: 12px;
    --borderColor: #78b13f;
  }
  .wrapper__input {
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid rgb(64, 136, 136);
    background-color: #cac6c6;
    color: #000;
    width: 300px;

    position: relative;
  }
  .input {
    outline: none;
    border: none;
    width: 100%;
    background-color: #cac6c6;
  }
  .icon {
    position: absolute;
    right: 18px;
    top: 38%;
    transform: translateY(-50%);
  }

  .close {
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
  }
  .close:before, .close:after {
    position: absolute;
    right: 0px;
    content: '';
    height: 18px;
    width: 2px;
    background-color: red;
    transform: translateY(50%);
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
    top: 0;
  }
  .check {
    display: inline-block;
    transform: rotate(45deg) translateY(-50%);;
    height: 20px;
    width: 10px;
    border-bottom: 4px solid #78b13f;
    border-right: 4px solid #78b13f;
  }
</style>