 import { ref } from 'vue'

 export function useInput() {
  const input = ref('')
  let passed = ref('')

// TODO
// function test() {
//   console.log('passed', passed)
//   passed.value === ''
//   debugger
// }

  function updateInput(newInput) {
    input.value = newInput
  }

  function updateEmailInput(newInput) {
    // Check if the symbols are correct
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const result = regex.test(newInput);
    
    if(result == true) {
      passed.value = 'passed'
    } else if(result == false) {
      passed.value = 'unpassed'
    } else {
      passed.value = ''
    }
    // console.log('passed', passed)
    input.value = newInput
  }
  
  return [ input, updateInput, updateEmailInput, passed ]
 }
