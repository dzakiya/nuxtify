<template>
    <!--Bagian Atas-->
    <v-app-bar :elevation="1" color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Application Bar</v-app-bar-title>
      <template v-slot:append>
        <v-text-field label="Search templates" append-inner-icon="mdi-magnify"></v-text-field>
  
        <!--- <v-btn icon="mdi-folder-multiple-plus-outline"></v-btn>  -->
  
        <!--COBA COBA POP UP DIALOG TAMBAH FOLDER-->
        <template>
          <div class="pa-4 text-center">
            <v-dialog v-model="dialog" max-width="600">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="text-none font-weight-regular" prepend-icon="mdi-folder-multiple-plus-outline"
                  v-bind="activatorProps"></v-btn>
              </template>
  
              <v-card prepend-icon="mdi-account" title="User Profile">
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field label="First name*" required></v-text-field>
                    </v-col>
  
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field hint="example of helper text only on focus" label="Middle name"></v-text-field>
                    </v-col>
  
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field hint="example of persistent helper text" label="Last name*" persistent-hint
                        required></v-text-field>
                    </v-col>
  
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field label="Email*" required></v-text-field>
                    </v-col>
  
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field label="Password*" type="password" required></v-text-field>
                    </v-col>
  
                    <v-col cols="12" md="4" sm="6">
                      <v-text-field label="Confirm Password*" type="password" required></v-text-field>
                    </v-col>
  
                    <v-col cols="12" sm="6">
                      <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                    </v-col>
  
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests" auto-select-first multiple></v-autocomplete>
                    </v-col>
                  </v-row>
  
                  <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>
  
                <v-divider></v-divider>
  
                <v-card-actions>
                  <v-spacer></v-spacer>
  
                  <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
  
                  <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
  
        <!--END OF COBA POP UP DIALOG-->
  
        <!-- <v-btn icon="mdi-plus-circle" size="x-large" color="purple-darken-2"></v-btn> -->
  
        <!--COBA POP UP DIALOG DARI SAMPING KANAN-->
        <template>
          <div class="text-center pa-4">
            <v-dialog v-model="dialogKanan" transition="dialog-left-transition" fullscreen>
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn prepend-icon="mdi-cog" size="small" text="Settings" v-bind="activatorProps"></v-btn>
              </template>
  
              <v-card>
                <v-toolbar>
                  <v-btn icon="mdi-close" @click="dialogKanan = false"></v-btn>
  
                  <v-toolbar-title>Settings</v-toolbar-title>
  
                  <v-spacer></v-spacer>
  
                  <v-toolbar-items>
                    <v-btn text="Save" variant="text" @click="dialogKanan = false"></v-btn>
                  </v-toolbar-items>
                </v-toolbar>
  
                <v-list lines="two" subheader>
                  <v-list-subheader>User Controls</v-list-subheader>
  
                  <v-list-item subtitle="Set the content filtering level to restrict apps that can be downloaded"
                    title="Content filtering" link></v-list-item>
  
                  <v-list-item subtitle="Require password for purchase or use password to restrict purchase"
                    title="Password" link></v-list-item>
  
                  <v-divider></v-divider>
  
                  <v-list-subheader>General</v-list-subheader>
  
                  <v-list-item subtitle="Notify me about updates to apps or games that I downloaded" title="Notifications"
                    @click="notifications = !notifications">
                    <template v-slot:prepend>
                      <v-list-item-action start>
                        <v-checkbox-btn v-model="notifications" color="primary"></v-checkbox-btn>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
  
                  <v-list-item subtitle="Auto-update apps at any time. Data charges may apply" title="Sound"
                    @click="sound = !sound">
                    <template v-slot:prepend>
                      <v-list-item-action start>
                        <v-checkbox-btn v-model="sound" color="primary"></v-checkbox-btn>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
  
                  <v-list-item subtitle="Automatically add home screen widgets" title="Auto-add widgets"
                    @click="widgets = !widgets">
                    <template v-slot:prepend>
                      <v-list-item-action start>
                        <v-checkbox-btn v-model="widgets" color="primary"></v-checkbox-btn>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-dialog>
          </div>
        </template>
  
  
        <!--END OF COBA POP UP DIALOG DARI SAMPING KANAN-->
      </template>
    </v-app-bar>
    <v-divider></v-divider>
  </template>
  
  <script>
  export default {
    data: () => ({
      dialog: false, //dialog dari icon + folder
      dialogKanan: false, //dialog dari icon + pojok kanan atas
      notifications: false,
      sound: true,
      widgets: false,
    
    }),
  }
  </script>