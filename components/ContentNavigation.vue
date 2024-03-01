<template>
    <v-navigation-drawer>
        <v-list-item title="My Application" subtitle="Satu Data untuk RSSA"></v-list-item>
        <v-divider></v-divider>
        <v-text-field placeholder="Search Collection" variant="outlined"></v-text-field>
        <v-divider></v-divider>
        <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
            <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Admin"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>

    <v-list v-model:opened="buka">
      <v-list-group value="Kepegawaian">
      <v-list-item>Kepegawaian</v-list-item>
      <v-list-group>
        <v-list-item>Modul Kepegawaian</v-list-item>
      </v-list-group>
    </v-list-group>
    
    </v-list>
    

      <NuxtLink to="/content/data-pegawai"><v-list-item prepend-icon="mdi-table-account" title="Data Pegawai"></v-list-item></NuxtLink>
      <NuxtLink to="/content/data-ppi"><v-list-item prepend-icon="mdi-hospital-box-outline" title="Data PPI"></v-list-item></NuxtLink>
      <NuxtLink to="/content/data-antrian-operasi"><v-list-item prepend-icon="mdi-doctor" title="Data Antrian Operasi"></v-list-item></NuxtLink>
      <NuxtLink to="/content/data-spt"><v-list-item prepend-icon="mdi-calendar-check-outline" title="Data SPT"></v-list-item></NuxtLink>
      <NuxtLink to="/content/data-sensus"><v-list-item prepend-icon="mdi-medical-bag" title="Data Sensus"></v-list-item></NuxtLink>

    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      buka: ['Kepegawaian'],
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script>