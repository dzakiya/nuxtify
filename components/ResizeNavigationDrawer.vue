<template>

      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
  
        <v-toolbar-title>Vuetify Resize Drawer v3.1.1</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          class="me-2"
          :height="iconSize.height"
          :href="links.github"
          icon
          target="_blank"
          :width="iconSize.width"
        >
          <v-icon icon="mdi:mdi-github" />
        </v-btn>
  
        <v-btn
          class="me-2"
          :height="iconSize.height"
          :href="links.npm"
          icon
          target="_blank"
          :width="iconSize.width"
        >
          <v-icon icon="mdi:mdi-npm" />
        </v-btn>
      </v-app-bar>
  
      <VResizeDrawer v-model="drawer" min-width="256" max-width="50%" permanent>
        <v-list :items="items"></v-list>
      </VResizeDrawer>
  
      <v-main style="height: 500px">
        <v-container>
          <v-row>
            <v-col cols="12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </v-col>
          </v-row>
        </v-container>
      </v-main>

  </template>
  
  <script>
    import VResizeDrawer from '@wdns/vuetify-resize-drawer'
  
    export default {
      components: {
        VResizeDrawer,
      },
      data: () => ({
        drawer: true,
        group: null,
        iconSize: {
          height: 32,
          width: 32,
        },
        items: [
          {
            title: 'Foo',
            value: 'foo',
          },
          {
            title: 'Bar',
            value: 'bar',
          },
          {
            title: 'Fizz',
            value: 'fizz',
          },
          {
            title: 'Buzz',
            value: 'buzz',
          },
        ],
        links: {
          discord: 'https://discord.com/users/979453275369783346',
          github: 'https://github.com/webdevnerdstuff/vuetify3-resize-drawer',
          githubProfile: 'https://github.com/webdevnerdstuff',
          npm: 'https://www.npmjs.com/package/vuetify3-resize-drawer',
        },
      }),
  
      watch: {
        group() {
          this.drawer = false
        },
      },
    }
  </script>
  