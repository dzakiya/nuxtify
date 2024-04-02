<template>
  <h3>FORM DATA USER</h3>
  <v-container>
    <v-form @submit.prevent="addUser">
      <v-row no-gutters>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-combobox
              v-model="pilihanJenisUser"
              label="Jenis User"
              :items="['Umum', 'Dokter', 'Perawat']"
            ></v-combobox>
            <v-text-field
              v-model="newUser.nip"
              label="NIP"
              required
            ></v-text-field>
            <v-text-field
              v-if="pilihanJenisUser === 'Umum'"
              v-model="newUser.nama_pegawai"
              label="Nama"
            ></v-text-field>
            <v-combobox
              v-if="pilihanJenisUser === 'Dokter'"
              v-model="selectedDokter"
              label="Dokter"
              :items="dokter"
              item-title="namadokter"
              item-value="kddokter"
            >
            </v-combobox>
            <v-combobox
              v-if="pilihanJenisUser === 'Perawat'"
              v-model="selectedPerawat"
              label="Perawat"
              :items="perawat"
              item-title="nama"
              item-value="idperawat"
            ></v-combobox>
            <v-text-field
              v-model="newUser.pwd"
              label="Password"
              type="password"
            ></v-text-field>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-combobox
              label="Roles"
              v-model="selectedRoles"
              :items="roles"
              item-title="rolename"
              item-value="roleid"
            ></v-combobox>
            <v-combobox
              label="Unit"
              v-model="selectedUnit"
              :items="unit"
              item-title="nama_unit"
              item-value="kode_unit"
            ></v-combobox>
            <!-- <v-text-field
              :items="unit"
              item-title="nama_unit"
              item-value="kode_unit"
              label="Departemen"
            ></v-text-field> -->
            <v-text-field
              v-model="newUser.nipb"
              label="NIP/NIPTT"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary">Simpan</v-btn>
          </v-sheet>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </v-row>
    </v-form>
  </v-container>

  <!--MENAMPILKAN TABEL-->
  <v-card class="mx-auto">
    <v-data-table
      :headers="headers"
      :items="dataUser"
      :items-per-page="8"
      :search="search"
    >
      <!--judul tabel, search dan button new item di pojok kanan-->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Data User SIM RS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
          <v-spacer></v-spacer>

          <!--Start Pop up Dialog Tambah Data & Edit Data dari contoh CRUD Vuetify-->
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
                  <v-text-field
                    v-model="editedItem.nip"
                    label="NIP"
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.nama_pegawai"
                    label="Nama Pegawai"
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.nipb"
                    label="NIP / NIPTTK"
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.rolename"
                    label="Role"
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.nama_unit"
                    label="Unit"
                  ></v-text-field>
                  <v-text-field
                    v-model="editedItem.aktif"
                    label="Status"
                  ></v-text-field>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  BATAL
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">
                  SIMPAN
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!--End of Pop up Dialog Tambah Data & Edit Data-->

          <!--Start Pop up dialog Edit User-->
          <v-dialog v-model="dialogEdit" max-width="500px">
            <v-card>
              <v-container>
                {{ dataDetail}}
                <v-form @submit.prevent="editUser" v-for="item in dataDetail">
                  <v-text-field v-model="item.nip" label="NIP" readonly="true"></v-text-field>
                  <v-text-field v-model="item.nama_pegawai" label="Nama Pegawai"></v-text-field>
                  <v-text-field v-model="item.roles" label="Roles"></v-text-field>
                  <v-select
  label="Roles"
  :items="roles"
  v-model="item.roles"
  item-title="rolename"
              item-value="roleid"
></v-select>
                  <v-text-field v-model="item.kdunit" label="Kode Unit"></v-text-field>
                  <v-text-field v-model="item.departemen" label="Departemen"></v-text-field>
                  <v-text-field v-model="item.nipb" label="NIP/NIPTT"></v-text-field>
                  <v-text-field v-model="item.aktif" label="Status"></v-text-field>
                  <v-btn type="submit" color="primary">Simpan</v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
          <!--End of Pop up dialog Edit User-->

          <!--Start Pop up dialog Delete User-->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Apakah anda yakin menghapus item ini?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Batal</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteUserConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!--End of Pop up Dialog Delete User-->

          <!--Start Pop up Dialog Detail-->
          <v-dialog v-model="dialogDetail" :items="dataDetail" max-width="800">
            <v-form @submit.prevent="getUserbyNip">
              <v-card>
                <v-container>
                  <!--{{ dataDetail }} -->

                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-left">NIP</th>
                        <th class="text-left">Nama</th>
                        <th class="text-left">NIPB</th>
                        <th class="text-left">Roles</th>
                        <th class="text-left">Kode Unit</th>
                        <th class="text-left">Departemen</th>
                        <th class="text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in dataDetail">
                        <td>{{ item.nip }}</td>
                        <td>{{ item.nama_pegawai }}</td>
                        <td>{{ item.nipb }}</td>
                        <td>{{ item.roles }}</td>
                        <td>{{ item.kdunit }}</td>
                        <td>{{ item.departemen }}</td>
                        <td>{{ item.aktif }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-container>
              </v-card>
            </v-form>
          </v-dialog>
          <!--End of Pop up Dialog Detail-->
        </v-toolbar>
      </template>
      <!--End of v-slot top-->

      <!--Start actions kolom lihat detail, edit dan delete -->
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="showDialogDetail(item.nip)">
          mdi-account-details
        </v-icon>
        <v-icon class="me-2" size="small" @click="showDialogEdit(item.nip)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteUser(item)"> mdi-delete </v-icon>
      </template>
      <!--End of actions-->
    </v-data-table>
  </v-card>
</template>

<script setup>
const pilihanJenisUser = ref("Umum"); // Initial user type
const pilihanRoles = ref();
const pilihanUnit = ref();
const pilihanDokter = ref();
const pilihanPerawat = ref();

const selectedDokter = ref();
const selectedPerawat = ref();
const selectedRoles = ref();
const selectedUnit = ref();

//untuk dialog
const dialog = ref(false);
const dialogDelete = ref(false);
const dialogDetail = ref(false); //berhasil
const dialogEdit = ref(false);

const editedIndex = ref(-1);
const editedItem = ref({
  nip: "",
  nama_pegawai: "",
  nipb: "",
  rolename: "",
  nama_unit: "",
  aktif: "",
});
const defaultItem = ref({});
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "New Data" : "Edit Data";
});
//end of dialog

const newUser = ref({
  nip: "",
  nama_pegawai: "",
  pwd: "",
  roles: "",
  kdunit: "",
  departemen: "",
  nipb: "",
});

const search = ref();
const userDetail = ref("");
const dataUser = ref([]);
const dataDetail = ref([]);
const headers = [
  { title: "NIP", value: "nip", sortable: true },
  { title: "Nama Pegawai", value: "nama_pegawai", sortable: true },
  { title: "NIPB", value: "nipb", sortable: true },
  { title: "Role", value: "rolename", sortable: true },
  { title: "Nama Unit", value: "nama_unit", sortable: true },
  { title: "Status", value: "aktif", sortable: true },
  { title: "Actions", key: "actions", sortable: false },
];

const { data: userSimRS } = useFetch("/api/user/userdetail"); //menampilkan di tabel
const { data: userDetailData } = useFetch("/api/user"); // Assuming userDetail endpoint
const { data: roles } = useFetch("/api/roles"); //dropdown pilihan roles
const { data: unit } = useFetch("/api/unit"); //dropdown pilihan unit
const { data: dokter } = useFetch("/api/dokter"); //dropdown pilihan dokter
const { data: perawat } = useFetch("/api/perawat"); //dropdown pilihan perawat

//untuk form edit 
const inputNip = ref('');
const inputNamapegawai = ref('');
const inputRoles = ref('');
const inputKodeUnit = ref('');
const inputDepartemen = ref('');
const inputNIPB = ref('');
const inputStatus = ref('');

//BERHASIL TAMBAH DATA
async function addUser() {
  try {
    const user = await $fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        nip: newUser.value.nip,
        nama_pegawai:
          pilihanJenisUser.value === "Umum"
            ? newUser.value.nama_pegawai
            : pilihanJenisUser.value === "Dokter"
            ? selectedDokter.value.namadokter
            : selectedPerawat.value.nama,
        kdperawat:
          pilihanJenisUser.value === "Perawat"
            ? selectedPerawat.value.idperawat
            : null,
        kddokter:
          pilihanJenisUser.value === "Dokter"
            ? selectedDokter.value.kddokter
            : null,
        pwd: newUser.value.pwd,
        roles: selectedRoles.value.roleid,
        kdunit: selectedUnit.value.kode_unit,
        departemen: selectedUnit.value.nama_unit,
        nipb: newUser.value.nipb,
        aktif: 1,
      }),
      headers: { "Content-Type": "application/json" }, // Added for clarity
    });

    console.log("User berhasil ditambahkan!"); // Success message
    alert("User berhasil ditambahkan!"); // Display alert

    // Optionally, clear the form after successful submission
    newUser.value = {
      nip: "",
      nama_pegawai: "",
      pwd: "",
      roles: "",
      kdunit: "",
      departemen: "",
      nipb: "",
    };
  } catch (error) {
    console.error("Kesalahan menambahkan user:", error);
    alert("Error: " + error.message); // Display error alert
  }
}

//COBA UPDATE USER -> belum berhasil
async function editUser(nip) {
  try {
    const user = await $fetch(`/api/user${nip}`, {
      method: "PUT",
      body: JSON.stringify({
        nip: newUser.value.nip,
        nama_pegawai:
          pilihanJenisUser.value === "Umum"
            ? newUser.value.nama_pegawai
            : pilihanJenisUser.value === "Dokter"
            ? selectedDokter.value.namadokter
            : selectedPerawat.value.nama,
        kdperawat:
          pilihanJenisUser.value === "Perawat"
            ? selectedPerawat.value.idperawat
            : null,
        kddokter:
          pilihanJenisUser.value === "Dokter"
            ? selectedDokter.value.kddokter
            : null,
        pwd: newUser.value.pwd,
        roles: selectedRoles.value.roleid,
        kdunit: selectedUnit.value.kode_unit,
        departemen: selectedUnit.value.nama_unit,
        nipb: newUser.value.nipb,
        aktif: 1, //menambahkan data user baru, kolom aktif langsung diisi 1
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("User berhasil diperbarui!"); // Success message
    alert("User berhasil diperbarui!"); // Display alert

    // Optionally, reload the page or fetch updated data
  } catch (error) {
    console.error("Kesalahan memperbarui user:", error);
    alert("Error: " + error.message); // Display error alert
  }
}

//BERHASIL MENAMPILKAN GETUSER BY NIP
async function getUserbyNip(nip) {
  try {
    const response = await fetch(`/api/user/userbynip/?nip=${nip}`);
    if (!response.ok) {
      // Handle API errors gracefully (e.g., display an error message)
      console.error(
        `Error fetching user details for NIP ${nip}:`,
        await response.text()
      );
      return; // Exit if API call fails
    }

    const userDetailData = await response.json();
    dataDetail.value = userDetailData.body;
  } catch (error) {
    console.error("Error fetching user details:", error);
    // Handle other potential errors during the process
  }
}

function deleteUser(item) {
  editedIndex.value = dataUser.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
}
function deleteUserConfirm() {
  dataUser.value.splice(editedIndex.value, 1);
  closeDelete();
}
function close() {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}
function closeDelete() {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}
function save() {
  if (editedIndex.value > -1) {
    Object.assign(dataUser.value[editedIndex.value], editedItem.value);
  } else {
    dataUser.value.push(editedItem.value);
  }
  close();
}

function showDialogDetail(nip) {
  //berhasil menampilkan dialog detail by nip
  dialogDetail.value = true;
  getUserbyNip(nip);
}

function showDialogEdit(nip) {
  dialogEdit.value = true;
  getUserbyNip(nip);
}

function closeDialogDetail() {
  dialogDetail.value = false;
}

function closeDialogEdit() {
  dialogEdit.value = false;
}

watch(dialog, (val) => {
  //dialog edit & tambah
  val || close();
});
watch(dialogDelete, (val) => {
  val || closeDelete();
});

watch(dialogDetail, (val) => {
  val || closeDialogDetail();
});

watch(dialogEdit, (val) => {
  val || closeDialogEdit();
});

//end of contoh

onMounted(async () => {
  await roles.value;
  await unit.value;
  await dokter.value;
  await perawat.value;
  await userSimRS.value;
  await userDetailData.value;

  dataUser.value = userSimRS.value; // Assuming userSimRS has user data
  userDetail.value = userDetailData.value; // Assuming userDetailData has detail data

  pilihanRoles.value = roles.value.map((role) => ({
    value: role.roleid, // Replace with the actual ID property
    text: role.rolename, // Replace with the actual property for role name
  }));

  pilihanUnit.value = unit.value.map((unitt) => ({
    value: unitt.kode_unit,
    text: unitt.nama_unit,
  }));

  pilihanDokter.value = dokter.value.map((dokterr) => ({
    value: dokterr.kddokter,
    text: dokterr.namadokter,
  }));

  pilihanPerawat.value = perawat.value.map((perawatt) => ({
    value: perawatt.idperawat,
    text: perawatt.nama,
  }));
});
</script>
