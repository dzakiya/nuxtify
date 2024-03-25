<!-- <template>
  <v-card class="mx-auto">
    <v-card-title>DATA USER SIMRS</v-card-title>

    <v-data-table :headers="headers" :items="dataUser" :paginations="50">
      <template v-slot:[`item.actions`]> </template>
    </v-data-table>
  </v-card>
</template>
<script>
definePageMeta({
  layout: "default",
});

export default {
  data: () => ({
    itemsPerPage: 7,
    userSimRS: "",
    dataUser: [],
  }),
  methods: {
    async getDataUser() {
      await fetch(`/api/user/userdata`)
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataUser = userSimRS;
        });
    },
  },
  created() {
    this.getDataUser();
  },
};
</script> -->

<template>
  <v-card class="mx-auto">
    <v-card-title>DATA USER SIMRS</v-card-title>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="mb-2"
              color="primary"
              dark
              v-bind="props"
            >
              New Item
            </v-btn>
          </template>
    <v-data-table items-per-page="50" v-model="selected">
      <thead>
        <tr>
          <th class="text-left">Nipb</th>
          <th class="text-left">Nama Pegawai</th>
          <th class="text-left">Instalasi</th>
          <th class="text-left">Roles</th>
          <th class="text-left">Action</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataUser" :key="item.nip">
          <td>{{ item.nip }}</td>
          <td>{{ item.nama_pegawai }}</td>
          <td>{{ item.rolename }}</td>
          <td>{{ item.nama_unit }}</td>
          <td>{{ item.nama_grupunit }}</td>
          <td>
            <v-icon small class="mr-2" @click="editUser(item.nip)"
              >mdi-pencil</v-icon
            >
          </td>
          <td>
            <v-icon small @click="deleteUser(item.nip)">mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>
    </v-data-table>
  </v-card>
</template>
<script>
definePageMeta({
  layout: "default",
});

export default {
  data: () => ({
    itemsPerPage: 5,
    userSimRS: "",
    dataUser: [],
  }),
  methods: {
    async getDataUser() {
      await fetch(`/api/user/userdata`)
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataUser = userSimRS;
        });
    },
  },
  created() {
    this.getDataUser();
  },
};
</script>
