<template>
    <div class="mb-4">
      <v-select
        v-model="provinsi"
        :items="provinsidata"
        item-title="name"
        item-value="id"
        :rules="[(v) => !!v || 'Provinsi wajib diisi']"
        label="Pilih Provinsi"
        color="accent"
        placeholder="Pilih salah satu"
        attach
        persistent-placeholder
        auto
        required
      ></v-select>
    </div>
  
    VALUE: {{ provinsi }}
  </template>
  
  <script>
definePageMeta({
    layout :'setting'
})


    export default {
      data: () => ({
        provinsi: '',
        provinsidata: [],
      }),
      methods: {
        async getData() {
          await fetch(
            `https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json`
          )
            .then(response => response.json())
            .then(provinces => {
              this.provinsidata = provinces
            }) 

            console.log(this.provinsidata.data) //cek data
    
        },
      },
      created() {
        this.getData()
      },
    }
  </script>
  