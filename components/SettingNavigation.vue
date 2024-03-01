<template>
    <v-navigation-drawer>   
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <NuxtLink to="/setting"><v-list-item prepend-icon="mdi-database-outline" title="Data Model"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/accesscontrol"><v-list-item prepend-icon="mdi-shield-account-variant-outline" title="Access Control"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/webhooks"><v-list-item prepend-icon="mdi-anchor" title="Webhooks"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/flows"><v-list-item prepend-icon="mdi-lightning-bolt-outline" title="Flows"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/extensions"><v-list-item prepend-icon="mdi-puzzle" title="Extensions"></v-list-item></NuxtLink>
      <v-divider></v-divider>
      <NuxtLink to="/setting/settings"><v-list-item prepend-icon="mdi-tune" title="Settings"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/appearance"><v-list-item prepend-icon="mdi-palette-outline" title="Appearance"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/bookmarks"><v-list-item prepend-icon="mdi-bookmark-outline" title="Bookmarks"></v-list-item></NuxtLink>
      <NuxtLink to="/setting/translation"><v-list-item prepend-icon="mdi-translate" title="Translations"></v-list-item></NuxtLink>
      <v-divider></v-divider>
      <NuxtLink to="https://github.com/directus/directus/issues/new?template=bug_report.yml"><v-list-item prepend-icon="mdi-bug-outline" title="Report Bug"></v-list-item></NuxtLink>
      <NuxtLink to="https://github.com/directus/directus/discussions/new?category=feature-requests"><v-list-item prepend-icon="mdi-star-box" title="Request Feature"></v-list-item></NuxtLink>
      <NuxtLink to="https://nuxt.com/"><v-list-item prepend-icon="mdi-vuetify" title="Nuxt x Vuetify"></v-list-item></NuxtLink>
      <NuxtLink to="/users"><v-list-item prepend-icon="mdi-vuetify" title="COBA COBA"></v-list-item></NuxtLink>
      
  </v-navigation-drawer>
</template>

<script>

</script>