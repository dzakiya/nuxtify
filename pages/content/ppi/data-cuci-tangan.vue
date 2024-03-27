<template>
  <h3>TAMBAH DATA USER</h3>
  <v-form @submit.prevent="addUser">
    <v-text-field v-model="newUser.nip" label="NIP" required></v-text-field>
    <v-text-field v-model="newUser.nama_pegawai" label="Nama"></v-text-field>
    <v-btn type="submit" color="primary">Tambah User</v-btn>
  </v-form>
</template>

<script setup>

const newUser = ref({
  nip: '',
  nama_pegawai: '',
})

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
</script>
