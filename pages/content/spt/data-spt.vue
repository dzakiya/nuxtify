<template>
  <h3>TAMBAH DATA USER</h3>
  <v-form @submit.prevent="addUser">
    <v-combobox label="Jenis User" :items="['Umum', 'Dokter', 'Perawat']"></v-combobox>
    <v-text-field v-model="newUser.nip" label="NIP" required></v-text-field>
    <v-text-field v-model="newUser.nama_pegawai" label="Nama"></v-text-field>
    <v-text-field v-model="newUser.nama_pegawai" label="Password"></v-text-field>
    <v-combobox label="Roles" :items="roles" item-title="rolename"
        item-value="roleid"></v-combobox>
    <v-combobox label="Unit" :items="unit" item-title="nama_unit"
        item-value="kode_unit"></v-combobox>
    <v-text-field :items="unit" item-title="nama_unit"
        item-value="kode_unit" label="Departemen"></v-text-field>
    <v-btn type="submit" color="primary">Tambah User</v-btn>
  </v-form>
</template>

<script setup>


const pilihanRoles = ref();
const piihanUnit = ref();
const newUser = ref({
  nip: '',
  nama_pegawai: '',
  role: '', // Add role property to store selected role value
});

const { data: roles } = useFetch('/api/roles');
const { data: unit } = useFetch('/api/unit');

//BERHASIL TAMBAH DATA
async function addUser() {
  try {
    const user = await $fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        nip: newUser.value.nip,
        nama_pegawai: newUser.value.nama_pegawai,
      }),
      headers: { 'Content-Type': 'application/json' }, // Added for clarity
    });

    console.log('User berhasil ditambahkan!'); // Success message
    alert('User berhasil ditambahkan!'); // Display alert

    // Optionally, clear the form after successful submission
    newUser.value = { nip: '', nama_pegawai: '' };
  } catch (error) {
    console.error('Kesalahan menambahkan user:', error);
    alert('Error: ' + error.message); // Display error alert
  }
}

onMounted(async () => {
  await roles.value;
  await unit.value;

  pilihanRoles.value = roles.value.map((role) => ({
    value: role.roleid, // Replace with the actual ID property
    text: role.rolename, // Replace with the actual property for role name
  }));

  pilihanUnit.value = roles.value.map((unitt) => ({
    value: unitt.kode_unit, // Replace with the actual ID property
    text: unitt.nama_unit, // Replace with the actual property for role name
  }));

  console.log(piihanUnit);
  console.log(pilihanRoles); // Verify data in console
});


// <!-- <template>
//   <h3>TAMBAH DATA USER</h3>
//   <v-form @submit.prevent="addUser">
//     <v-combobox label="Jenis User" :items="['Umum', 'Dokter', 'Perawat']"></v-combobox>
//     <v-text-field v-model="newUser.nip" label="NIP" required></v-text-field>
//     <v-text-field v-model="newUser.nama_pegawai" label="Nama"></v-text-field>
//     <v-text-field v-model="newUser.nama_pegawai" label="Password"></v-text-field>
//     <v-combobox label="Roles" :items="computedPilihanRoles"></v-combobox>
//     <v-btn type="submit" color="primary">Tambah User</v-btn>
//   </v-form>

// </template>

// <script setup>

// const pilihanRoles = ref([])
// const newUser = ref({
//   nip: '',
//   nama_pegawai: '',
// })

// const { data: roles } = useFetch('/api/roles')

// //BERHASIL TAMBAH DATA
// async function addUser() {
//   try {
//     const user = await $fetch('/api/user', {
//       method: 'POST',
//       body: JSON.stringify({
//         nip: newUser.value.nip,
//         nama_pegawai: newUser.value.nama_pegawai,
//       }),
//       headers: { 'Content-Type': 'application/json' }, // Added for clarity
//     });

//     console.log('User berhasil ditambahkan!'); // Success message
//     alert('User berhasil ditambahkan!'); // Display alert

//     // Optionally, clear the form after successful submission
//     newUser.value = { nip: '', nama_pegawai: '' };
//   } catch (error) {
//     console.error('Kesalahan menambahkan user:', error);
//     alert('Error: ' + error.message); // Display error alert
//   }
// }

// const computedPilihanRoles = computed(() => {
//   return Array.isArray(pilihanRoles.value) ? pilihanRoles.value : [];
// });

// onMounted(async () => {
//   // Await both fetches to ensure data is available before use
//   await roles.value;
 
//   pilihanRoles.value = roles.value.map((role) => ({
//     value: role.roleid, // Replace with the actual ID property from your API response
//     text: role.rolename, // Replace with the actual property for role name
//   }));

//   console.log(pilihanRoles.value)
// })
// </script> -->
