<template>
  <v-card class="mx-auto">
    <v-card-title>DATA USER SIMRS</v-card-title>

    <v-data-table :headers="headers" :items="dataUser" :items-per-page="20">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editUser(item.nip)"
          >mdi-pencil</v-icon
        >
        <v-icon small @click="deleteUser(item.nip)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
definePageMeta({
  layout: "default",
});

export default {
  data: () => ({
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