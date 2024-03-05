<template>
    <v-navigation-drawer permanent
        rail>
        <v-list
          density="compact"
          nav
        >
        <v-list-item prepend-icon="$vuetify"></v-list-item>
        <v-list-item prepend-icon="mdi-cube-outline" to="/content/data-pegawai"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" to="/setting"></v-list-item>
        <v-list-item prepend-icon="mdi-logout"></v-list-item>
        <v-list-item prepend-icon="mdi-alert"></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-account"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
