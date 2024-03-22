<script setup>
const { data } = await useFetch('/api/hello')

definePageMeta({
    layout :'setting'
})

</script>

<template>
  <div>
    <p>Result of <UKbd size="lg">/api/hello</UKbd>:</p>
    <pre>{{ data }}</pre>
  </div>
</template>
