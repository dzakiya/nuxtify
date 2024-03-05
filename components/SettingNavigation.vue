<template>
  <v-navigation-drawer>
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item prepend-icon="mdi-database-outline" to="/setting" title="Data Model"></v-list-item>
    <v-list-item prepend-icon="mdi-shield-account-variant-outline" to="/setting/accesscontrol"
      title="Access Control"></v-list-item>
    <v-list-item prepend-icon="mdi-anchor" to="/setting/webhooks" title="Webhooks"></v-list-item>
    <v-list-item prepend-icon="mdi-lightning-bolt-outline" to="/setting/flows" title="Flows"></v-list-item>
    <v-list-item prepend-icon="mdi-puzzle" to="/setting/extensions" title="Extensions"></v-list-item>
    <v-divider></v-divider>
    <v-list-item prepend-icon="mdi-tune" to="/setting/settings" title="Settings"></v-list-item>
    <v-list-item prepend-icon="mdi-palette-outline" to="/setting/appearance" title="Appearance"></v-list-item>
    <v-list-item prepend-icon="mdi-bookmark-outline" to="/setting/bookmarks" title="Bookmarks"></v-list-item>
    <v-list-item prepend-icon="mdi-translate" to="/setting/translation" title="Translations"></v-list-item>
    <v-divider></v-divider>
    <NuxtLink to="https://github.com/directus/directus/issues/new?template=bug_report.yml"><v-list-item prepend-icon="mdi-bug-outline" title="Report Bug"></v-list-item></NuxtLink>
    <NuxtLink to="https://github.com/directus/directus/discussions/new?category=feature-requests"><v-list-item prepend-icon="mdi-star-box" title="Request Feature"></v-list-item></NuxtLink>
    <NuxtLink to="https://nuxt.com/"><v-list-item prepend-icon="mdi-vuetify" title="Nuxt x Vuetify"></v-list-item></NuxtLink>
  </v-navigation-drawer>
</template>
