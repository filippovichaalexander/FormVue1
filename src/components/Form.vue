<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import TextInput from '@/components/TextInput.vue'
import EmailInput from '@/components/EmailInput.vue'
import Button from './Button.vue'

let passed = ref('')
const email = ref('')

const validateEmail = () => {
    // Check if the symbols are correct
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let result = regex.test(email.value);
    console.log('email', email.value)
    console.log('result', result)
    console.log('passed.value', passed.value)
    if(result == true) {
      passed.value = 'passed'
    } else if(result == false) {
      passed.value = 'unpassed'
    } else {
      passed.value = ''
    }
  }

  onMounted(() => {
    validateEmail()
  })

  onUpdated(() => {
    validateEmail()
  })
  
  
</script>

<template>
  <div class="form" @submit="onSubmit">
    <div class="inputs">
      <div class="input__wrapper">
        <p class="label">Your First name</p>
        <TextInput />
      </div>
      <div class="input__wrapper">
        <p class="label">Your Last name</p>
        <TextInput />
      </div>
      <div class="input__wrapper">
        <p class="label">Your Email</p>
        <EmailInput v-model="email" :passed="passed"/>
      </div>
    </div>
    <Button :email="email"/>
  </div>
</template>

<style scoped>
  .inputs {
    margin-bottom: 20px;
  }
  .input__wrapper {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
</style>