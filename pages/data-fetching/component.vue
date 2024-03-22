<script setup>
const id = ref(1)

definePageMeta({
    layout :'setting'
})

</script>

<template>
  <div class="flex flex-col gap-2">
    <p>Example of data fetching inside a component:</p>
    <p><UButton @click="id--">Previous</UButton> - <UButton @click="id++">Next</UButton></p>
    <TheQuote :id="id" /> <!--menampilkan quote dari komponen TheQuote-->
    <NuxtLink class="underline" to="/setting">Back to Home</NuxtLink>
  </div>
</template>
