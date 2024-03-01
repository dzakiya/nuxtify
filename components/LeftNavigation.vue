<template>
    <v-navigation-drawer model-value class="pt-4" rail>
        <v-btn icon="$vuetify" class="d-block text-center mx-auto mb-9"></v-btn>
        <NuxtLink to="/content/data-pegawai"><v-btn icon="mdi-cube-outline" class="d-block text-center mx-auto mb-9"></v-btn></NuxtLink>
        <NuxtLink to="/setting"><v-btn icon="mdi-cog" class="d-block text-center mx-auto mb-9"></v-btn></NuxtLink>
        <v-btn icon="mdi-logout" class="d-block text-center mx-auto mb-9"></v-btn>

        <v-btn icon="mdi-alert" class="d-block text-center mx-auto mb-9"></v-btn>
        <v-btn icon="mdi-account" class="d-block text-center mx-auto mb-9"></v-btn>
    </v-navigation-drawer>
</template>
