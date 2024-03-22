<template>
    <div class="mb-4">
      <v-select
        v-model="produk"
        :items="dataProduk"
        item-title="product_name"
        item-value="product_price"
        :rules="[(v) => !!v || 'Produk wajib diisi']"
        label="Pilih Produk"
        color="accent"
        placeholder="Pilih salah satu"
        attach
        persistent-placeholder
        auto
        required
      ></v-select>
    </div>
  
    HARGA: {{ produk }}

    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          ID Produk
        </th>
        <th class="text-left">
          Nama Produk
        </th>
        <th class="text-left">
          Harga
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dataProduk"
        :key="item.product_name"
      >
        <td>{{ item.product_id }}</td>
        <td>{{ item.product_name }}</td>
        <td>{{ item.product_price }}</td>
      </tr>
    </tbody>
  </v-table>
   
  </template>
  
  <script>
definePageMeta({
    layout :'setting'
})


    export default {
      data: () => ({
        produk: '',
        dataProduk: [],

      }),
      methods: {
        async getData() {
          await fetch(
            `http://localhost:5000/products`
          )
            .then(response => response.json())
            .then(products => {
              this.dataProduk = products
            }) 
        },
      },
      created() {
        this.getData()
      },
    }
  </script>
  