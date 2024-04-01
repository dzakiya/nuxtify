<template>
  <v-data-table :headers="headers" :items="desserts" :sort-by="[{ key: 'calories', order: 'asc' }]">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" dark v-bind="props">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.nip" label="NIP"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.pwd" label="Password"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.ses_reg" label="Session Register"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.kdperawat" label="Kode Perawat"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.kddokter" label="Kode Dokter"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.nama_pegawai" label="Nama Pegawai"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.roles" label="Roles"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.kdunit" label="Kode Unit"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.departemen" label="Departemen"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.st_dokter_rajal_eksekutif" label="Status Dokter Rajal Eksekutif"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.st_dokter_rajal_reguler" label="Status Dokter Rajal Reguler"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.st_dokter_rajal_emergency" label="Status Dokter Rajal Emergency"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.nipb" label="NIPB"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field v-model="editedItem.aktif" label="Aktif"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue'

const userSimRS = ref('');

const { data: user } = useFetch('api/user', {});



const dialog = ref(false)
const dialogDelete = ref(false)
// const headers = ref([
//   {
//     title: 'Dessert (100g serving)',
//     align: 'start',
//     sortable: false,
//     key: 'name',
//   },
//   { title: 'Calories', key: 'calories' },
//   { title: 'Fat (g)', key: 'fat' },
//   { title: 'Carbs (g)', key: 'carbs' },
//   { title: 'Protein (g)', key: 'protein' },
//   { title: 'Actions', key: 'actions', sortable: false },
// ])
const headers = ref([
  {
    title: 'NIP',
    align: 'start',
    sortable: 'false',
    key: 'nip',
  },
  {title: 'Password', key: 'pwd'},
  {title: 'Session Register', key: 'ses_reg'},
  {title: 'Kode Perawat', key: 'kdperawat'},
  {title: 'Kode Dokter', key: 'kddokter'},
  {title: 'Nama Pegawai', key: 'nama_pegawai'},
  {title: 'Role', key: 'roles'},
  {title: 'Kode Unit', key: 'kdunit'},
  {title: 'Departemen', key: 'departemen'},
  {title: 'Status Dokter Rajal Eksekutif', key: 'st_dokter_rajal_eksekutif'},
  {title: 'Status Dokter Rajal Reguler', key: 'st_dokter_rajal_reguler'},
  {title: 'Status Dokter Rajal Emergency', key: 'st_dokter_rajal_emergency'},
  {title: 'NIPB', key: 'nipb'},
  {title: 'Aktif', key: 'aktif'},
])
//const desserts = ref([])
const dataUser = ref([])
const editedIndex = ref(-1)
const editedItem = ref({
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
})
const defaultItem = ref({
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
})
const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Item' : 'Edit Item'
})

function getDataUser() {
  fetch(`/api/user`)
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataUser = userSimRS;
        });
}

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
function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value)
  } else {
    desserts.value.push(editedItem.value)
  }
  close()
}


watch(dialog, val => {
  val || close()
})
watch(dialogDelete, val => {
  val || closeDelete()
})
getDataUser()
</script>