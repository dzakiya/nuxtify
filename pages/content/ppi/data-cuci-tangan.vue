<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="nip" placeholder="NIP" required>
    <input type="text" v-model="nama" placeholder="Nama" required>
    <input type="text" v-model="departemen" placeholder="Departemen" required>
    <button type="submit">Kirim</button>
  </form>
</template>

<script setup>
const nip = ref('');
const nama = ref('');
const departemen = ref('');

function handleSubmit(event) {
  const formData = new FormData(event.target);

  const data = {
    nip: formData.get('nip'),
    nama: formData.get('nama'),
    departemen: formData.get('departemen'),
  };

  contactForm(data); // Pass data object directly
}

async function contactForm(formData: any) {
  try {
    await $fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    console.log('Data berhasil terkirim'); // Update success message
  } catch (error) {
    console.error('Error:', error);
    // Implement more specific error handling here
  }
}
</script>