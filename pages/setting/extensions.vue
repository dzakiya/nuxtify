<template>
  <v-card
      title="Extensions"
      flat
    >
  <v-card class="mx-auto" prepend-icon="mdi-home" width="400">
    <template v-slot:title>
      This is a title
    </template>

    <v-card-text>
      This is content
    </v-card-text>
  </v-card>
  </v-card>
</template>

<script setup>
definePageMeta({
  layout: 'setting'
})
</script>