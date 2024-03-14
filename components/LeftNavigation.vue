<template>
    <v-navigation-drawer color="primary" 
        rail>
        <v-list
          density="compact"
          nav
        >
        <v-list-item prepend-icon="$vuetify"></v-list-item>
        <v-list-item prepend-icon="mdi-cube-outline" to="/content/kepegawaian/data-pegawai1"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" to="/setting"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" to="/cobamiddleware"></v-list-item>
        <v-list-item prepend-icon="mdi-alert" to="/users"></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-account" to="/cobaresize"></v-list-item>
        <v-list-item prepend-icon="mdi-home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-home" to="/cobaserver"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
