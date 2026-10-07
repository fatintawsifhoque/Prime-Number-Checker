<template>
  <section class="h-screen w-screen bg-green-100 flex flex-col items-center justify-center gap-6">
    <input type="number" class="border h-12 rounded-lg outline-0 pl-3" v-model="input">
    <p v-if="st" class="text-xl font-bold mt-4">{{ st }}</p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const input = ref(null);
const st = ref('');

watch(input, (newVal) => {
  if (newVal === null || newVal === '') {
    st.value = '';
    return;
  }

  const num = Number(newVal);

  if (num <= 1 || !Number.isInteger(num)) {
    st.value = 'Not Prime';
    return;
  }

  if (num === 2) {
    st.value = 'Prime';
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  st.value = isPrime ? 'Prime' : 'Not Prime';
});
</script>

<style scoped>
</style>