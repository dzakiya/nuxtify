<template>
  <h2>Index student</h2>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="dataStudent">
          <template v-slot:top>
            <v-toolbar flat> </v-toolbar>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon
              class="me-2"
              size="small"
              @click="showdialogdetail(item.nip)"
              >mdi-account</v-icon
            >
            <v-icon class="me-2" size="small" @click="showdialogedit()"
              >mdi-pencil</v-icon
            >
            <v-icon class="me-2" size="small" @click="showdialogdelete()"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogdetail" :items="dataDetail" max-width="800">
      <v-card>
        <v-container>
          {{ dataDetail }}

          <v-table>
            <thead>
              <tr>
                <th class="text-left">Id</th>
                <th class="text-left">Name</th>
                <th class="text-left">Class</th>
                <th class="text-left">Mark</th>
                <th class="text-left">Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataDetail">
                <td>{{ item.nip }}</td>
                <td>{{ item.nama_pegawai }}</td>
                <td>{{ item.departemen }}</td>
                <td>{{ item.aktif }}</td>
                <td>{{ item.roles }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogedit" max-width="800">
      <v-card>
        <v-container>
          <h2>FORM EDIT</h2>
          {{ dataDetail }}
          <v-row>
            <v-col cols="12" sm="10">
              <v-text-field label="ID"></v-text-field>
            </v-col>
            <v-col cols="12" sm="10">
              <v-text-field label="NAME"></v-text-field>
            </v-col>
            <v-col cols="12" sm="10">
              <v-text-field label="CLASS"></v-text-field>
            </v-col>
            <v-col cols="12" sm="10">
              <v-text-field label="MARK"></v-text-field>
            </v-col>
            <v-col cols="12" sm="10">
              <v-text-field label="GENDER"></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              BATAL
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="save">
              SIMPAN
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogdelete" max-width="800">
      <v-card>
        <v-container>
          {{ dataDetail }}
          <h2>Apakah anda yakin menghapus file ini?</h2>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              TIDAK
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="save">
              YA
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    userSimRS: "",
    dataStudent: [],
    dataDetail: [],
    headers: [
      //untuk tabel utama
      { title: "NIP", key: "nip" },
      { title: "NAMA PEGAWAI", key: "nama_pegawai" },
      { title: "ACTION", key: "actions" },
    ],
    headersdetail: [
      //untuk menampilkan detail
      { title: "NIP", key: "nip" },
      { title: "NAMA PEGAWAI", key: "nama_pegawai" },
      { title: "NIPB", key: "nipb" },
      { title: "DEPARTEMEN", key: "departemen" },
      { title: "ROLE", key: "roles" },
    ],
    dialogdetail: false,
    dialogedit: false,
    dialogdelete: false,
  }),

  methods: {
    showdialogdetail(nip) {
      console.log(this);
      this.dialogdetail = true;
      this.getDataUserDetail(nip);
    },
    showdialogedit() {
      this.dialogedit = true;
    },
    showdialogdelete() {
      this.dialogdelete = true;
    },

    async getDataUser() {
      await fetch("/api/user")
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataStudent = userSimRS;
        });
    },

    async getDataUserDetail(nip) {
      //console.log(this)
      await fetch(`/api/user/userbynip/?nip=${nip}`)
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataDetail = userSimRS.body;
        });
    },
  },

  created() {
    this.getDataUser();
    this.getDataUserDetail();
  },
};
</script>
