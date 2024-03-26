<template>
  <v-data-table
    :headers="headers"
    :items="dataUser"
  >
    </v-data-table>
</template>

<script setup>
const { data: userSimRS } = useFetch('/api/user/userdata');

const dataUser = userSimRS.data.map((item) => {
  return {
    nip: item.nip,
    nama_pegawai: item.nama_pegawai,
    rolename: item.rolename,
    nama_unit: item.nama_unit,
    nama_grupunit: item.nama_grupunit
  };
});

const headers = [
  {
    text: 'NIP',
    align: 'start',
    sortable: false,
    value: 'nip',
  },
  {
    text: 'Nama Pegawai',
    value: 'nama_pegawai',
  },
  {
    text: 'Role',
    value: 'rolename',
  },
  {
    text: 'Nama Unit',
    value: 'nama_unit',
  },
  {
    text: 'Nama Grup Unit',
    value: 'nama_grupunit',
  },
];
</script>