<template>
<div>
    <div>Ini page Coba Server</div>
</div>
</template>

<script setup>
// const fetch = await $fetch('api/hello') //ini dirender di server 
// console.log(fetch)

useHead

onMounted(() => {
    (async () => {
        const { refresh } = useFetch('/api/hello')
        const fetch = await $fetch('api/hello')
        console.log(fetch)
    })()

})
</script>