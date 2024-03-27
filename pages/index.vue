<!-- <script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <pre>{{ data }}</pre>
</template> -->

<template>
  <v-card class="mx-auto">
    <v-data-table :headers="headers" :items="dataUser" :items-per-page="8">
      <!--judul tabel dan button new item di pojok kanan-->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Data User SIM RS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>


          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props">
                TAMBAH DATA
              </v-btn>
            </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-text-field v-model="newUser.nip" label="NIP"></v-text-field>
                    <v-text-field v-model="newUser.nama_pegawai" label="Nama Pegawai"></v-text-field>
                    <v-text-field v-model="newUser.nipb" label="NIP / NIPTTK"></v-text-field>
                    <v-text-field v-model="newUser.departemen" label="Departemen"></v-text-field>
                    <v-text-field v-model="newUser.aktif" label="Aktif"></v-text-field>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  BATAL
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="addUser">
                  SIMPAN
                </v-btn>
              </v-card-actions>
              </v-card>
  
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Apakah anda yakin menghapus item ini?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Batal</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-toolbar>
      </template>
      <!--end of v-slot top-->

      <!--actions kolom edit dan delete -->
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="detaillUser(item)">
          mdi-account-details
        </v-icon>
        <v-icon class="me-2" size="small" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <!--end of actions-->
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userDetail = ref("")
const dataUser = ref([])
const headers = [
  { title: "NIP", value: "nip", sortable: true },
  { title: "Nama Pegawai", value: "nama_pegawai", sortable: true },
  { title: "NIPB", value: "nipb", sortable: true },
  { title: "Departemen", value: "departemen", sortable: true },
  { title: "Aktif", value: "aktif", sortable: true },
  { title: "Actions", key: "actions", sortable: false },
]

//trial buat post 
const inputNip = ref ('')
const inputNama_pegawai = ref ('')
const inputNipb = ref('')
const inputDepartemen = ref('')
const inputAktif = ref(1)

const newUser = ref({
  nip: '',
  nama_pegawai: '',
  nipb: '',
  departemen: '',
  aktif: 0,
});

//tambahan
const dialog = ref(false)
const dialogDelete = ref(false)
const editedIndex = ref(-1)
const editedItem = ref({
  nip: '',
  nama_pegawai: '',
  nipb: '',
  departemen: '',
  aktif: 0,
})
const defaultItem = ref({
  nip: '',
  nama_pegawai: '',
  nipb: '',
  departemen: '',
  aktif: 1,
})
const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'TAMBAH DATA' : 'EDIT DATA'
})
//end of tambahan
const { data: userSimRS } = await useFetch('/api/user')

//tambahan
function editItem(item) {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialog.value = true
}
function deleteItem(item) {
  editedIndex.value = desserts.value.indexOf(item)
  editedItem.value = Object.assign({}, item)
  dialogDelete.value = true
}
function deleteItemConfirm() {
  desserts.value.splice(editedIndex.value, 1)
  closeDelete()
}
function close() {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}
function closeDelete() {
  dialogDelete.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
    editedIndex.value = -1
  })
}

//untuk tambah data
function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value)
  } else {
    desserts.value.push(editedItem.value)
  }
  close()
}

//coba bikin tambah data user baru 
async function addUser(newUser) {
  const userObject = {
    nip: newUser.nip,
    nama_pegawai: newUser.nama_pegawai,
    nipb: newUser.nipb,
    departemen: newUser.departemen,
    aktif: 1, 
  };

  try {
    const { fetch } = useFetch('/api/user'); // Replace with your API endpoint

    const response = await fetch({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObject),
    });

    if (response.ok) {
      console.log('User successfully added!');
      // Clear the form after successful submission (optional)
      newUser.nip = '';
      newUser.nama_pegawai = '';
      newUser.nipb = '';
      newUser.departemen = '';
      // Optionally, reset other form fields
    } else {
      console.error('Error adding user:', await response.text());
      // Handle specific errors based on response status codes
    }
  } catch (error) {
    console.error('Error adding user:', error);
    // Handle unexpected errors
  }
}

//function tambahUser
function tambahUser() {
  $fetch('/api/user', {
    method: 'POST',
    body: 
    { hello: 'world '}
    
  })
}

watch(dialog, val => {
  val || close()
})
watch(dialogDelete, val => {
  val || closeDelete()
})
//end of tambahan

onMounted(async () => {
  // Await both fetches to ensure data is available before use
  await userSimRS.value
 // await userDetailData.value

  dataUser.value = userSimRS.value // Assuming userSimRS has user data
 // userDetail.value = userDetailData.value // Assuming userDetailData has detail data
})
</script>