<template>
  <h3>TAMBAH DATA USER</h3>
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
            <template v-slot:no-data>
              <p class="ml-3 mt-3">[Slot] Sorry, we dont have data for you!</p>
            </template>
            </v-combobox>
            <v-combobox
              v-if="pilihanJenisUser === 'Perawat'"
              v-model="selectedPerawat"
              label="Perawat"
              :items="perawat"
              item-title="nama"
              item-value="idperawat"
            ></v-combobox>
            <v-text-field v-model="newUser.pwd" label="Password"></v-text-field>
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
            <v-btn type="submit" color="primary">Tambah User</v-btn>
          </v-sheet>
        </v-col>

        <v-responsive width="100%"></v-responsive>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
const pilihanJenisUser = ref("Umum"); // Initial user type
const pilihanRoles = ref();
const pilihanUnit = ref();
const pilihanDokter = ref();
const pilihanPerawat = ref();

const selectedDokter = ref({fill:"Pilih salah satu"});
const selectedPerawat = ref({});
const selectedRoles = ref({});
const selectedUnit = ref({});

const newUser = ref({
  nip: "",
  nama_pegawai: "",
  pwd: "",
  roles: "",
  kdunit: "",
  departemen: "",
  nipb: "",
});

const { data: roles } = useFetch("/api/roles");
const { data: unit } = useFetch("/api/unit");
const { data: dokter } = useFetch("/api/dokter");
const { data: perawat } = useFetch("/api/perawat");

//BERHASIL TAMBAH DATA
async function addUser() {
  try {
    const user = await $fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        nip: newUser.value.nip,
        nama_pegawai: pilihanJenisUser.value === "Umum" ? newUser.value.nama_pegawai : (pilihanJenisUser.value === "Dokter" ? selectedDokter.value.namadokter : selectedPerawat.value.nama),
        kdperawat: pilihanJenisUser.value === "Perawat" ? selectedPerawat.value.idperawat : null,
        kddokter: pilihanJenisUser.value === "Dokter" ? selectedDokter.value.kddokter : null,
        pwd: newUser.value.pwd,
        roles: selectedRoles.value.roleid,
        kdunit: selectedUnit.value.kode_unit,
        departemen: selectedUnit.value.nama_unit,
        nipb: newUser.value.nipb,
        aktif: 1
      }),
      headers: { "Content-Type": "application/json" }, // Added for clarity
    });

    console.log("User berhasil ditambahkan!"); // Success message
    alert("User berhasil ditambahkan!"); // Display alert

    // Optionally, clear the form after successful submission
    newUser.value = { nip: "", nama_pegawai: "", pwd: "", roles: "", kdunit:"", departemen:"", nipb: "" };
  } catch (error) {
    console.error("Kesalahan menambahkan user:", error);
    alert("Error: " + error.message); // Display error alert
  }
}

onMounted(async () => {
  await roles.value;
  await unit.value;
  await dokter.value;
  await perawat.value;

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

  pilihanPerawat.value = perawat.value.map((perawat) => ({
    value: perawatt.idperawat,
    text: perawatt.nama,
  }));
});
</script>
