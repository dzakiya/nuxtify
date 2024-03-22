<template>
    <v-navigation-drawer v-model="drawer">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list
          density="compact"
          nav
        >
      <v-list-item prepend-icon="mdi-database-outline" to="/setting" title="Data Model" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-shield-account-variant-outline" to="/setting/accesscontrol"
        title="Access Control" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-anchor" to="/setting/webhooks" title="Webhooks" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-lightning-bolt-outline" to="/setting/flows" title="Flows" color="primary" rounded="xl" ></v-list-item>
      <v-list-item prepend-icon="mdi-puzzle" to="/setting/extensions" title="Extensions" color="primary" rounded="xl" ></v-list-item>
      <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-tune" to="/setting/settings" title="Settings" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-palette-outline" to="/setting/appearance" title="Appearance" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-bookmark-outline" to="/setting/bookmarks" title="Bookmarks" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-translate" to="/setting/translation" title="Translations" color="primary" rounded="xl"></v-list-item>
      <v-divider></v-divider>
      <NuxtLink to="https://github.com/directus/directus/issues/new?template=bug_report.yml"><v-list-item prepend-icon="mdi-bug-outline" title="Report Bug" color="primary" rounded="xl"></v-list-item></NuxtLink>
      <NuxtLink to="https://github.com/directus/directus/discussions/new?category=feature-requests"><v-list-item prepend-icon="mdi-star-box" title="Request Feature" color="primary" rounded="xl" ></v-list-item></NuxtLink>
      <NuxtLink to="https://nuxt.com/"><v-list-item prepend-icon="mdi-vuetify" title="Nuxt x Vuetify" color="primary" rounded="xl"></v-list-item></NuxtLink>
      <v-list-item to="/setting/datamodel" title="Coba Data Model"></v-list-item>

      <v-divider></v-divider>
      <h6>DATA FETCHING</h6>
      <v-list-item prepend-icon="mdi-tune" to="/data-fetching/" title="Index" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-palette-outline" to="/data-fetching/component" title="Component" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-bookmark-outline" to="/data-fetching/external" title="External" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-bookmark-outline" to="/data-fetching/datatrial" title="Data Trial" color="primary" rounded="xl"></v-list-item>
      <v-list-item prepend-icon="mdi-bookmark-outline" to="/data-fetching/dataproduk" title="Data Produk" color="primary" rounded="xl"></v-list-item>
    </v-list>
    </v-navigation-drawer>  

    <!--START APP BAR-->
    <v-app-bar
    color="primary"
      >
            <template v-slot:prepend>
          <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <!--END APP BAR-->

  </template>

<script>
    
export default {

    data: () => ({
        drawer: true, //untuk buka tutup drawer
    }),
    
}

</script>

  
  