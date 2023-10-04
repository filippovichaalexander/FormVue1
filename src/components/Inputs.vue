<script setup>
import TextInput from '@/components/TextInput.vue'
import EmailInput from '@/components/EmailInput.vue'

// import { ref } from 'vue'

// const email = ref('')
</script>
<template>
  <div class="inputs">
    <div class="container">
      <div class="inputs__inner">
        <TextInput />
        <TextInput />
        <EmailInput />
      </div>
    </div>
    <!-- <div class="input__wrapper">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email">
    </div>
    <div class="input__wrapper">
      <label for="firstname">First name</label>
      <input id="firstname" type="text" v-model="firstname">
    </div>
    <div class="input__wrapper">
      <label for="lastname">Last name</label>
      <input id="lastname" type="text" v-model="lastname">
    </div> -->
  </div>
</template>

<!-- <script setup>
  
import { ref } from 'vue';

const email = r>ef('')
const firstname = ref('')
const lastname = ref('')

const onSubmit = () => {

}
</script> -->

<style scoped>
  .container {
    margin: 0 auto;
    width: 80%;
    padding: 0 50px;
    max-width: 1200px;
  }
  .inputs__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>