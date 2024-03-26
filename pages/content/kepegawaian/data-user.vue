<!-- <template>
  <v-card title="Data User SIM RS" flat>
      <template v-slot:text>
          <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
              hide-details single-line></v-text-field>
      </template>
  </v-card>
  <br>
  <h3>data user sim rs</h3>
  <v-table>
      <thead>
          <tr>
              <th class="text-left">NIP</th>
              <th class="text-left">Nama Pegawai</th>
              <th class="text-left">NIP</th>
              <th class="text-left">Departemen</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
              <th class="text-left">Roles</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in dataUser" :key="item.nip">
              <td>{{ item.nip }}</td>
              <td>{{ item.pwd }}</td>
              <td>{{ item.ses_reg }}</td>
              <td>{{ item.kdperawat }}</td>
              <td>{{ item.kddokter }}</td>
              <td>{{ item.nama_pegawai }}</td>
              <td>{{ item.departemen }}</td>
              <td>{{ item.roles }}</td>
              <td>{{ item.kdunit }}</td>
              <td>{{ item.departemen }}</td>
              <td>{{ item.st_dokter_rajal_eksekutif }}</td>
              <td>{{ item.st_dokter_rajal_reguler }}</td>
              <td>{{ item.st_dokter_rajal_emergency }}</td>
              <td>{{ item.nipb }}</td>
              <td>{{ item.aktif }}</td>
          </tr>
      </tbody>
  </v-table>

</template>

<script>
definePageMeta({
  layout: 'setting'
})

const search = ref('')
const headers = [
  {
align: 'start',
key: 'nip',
sortable: false,
title: 'NIP',
  },
{key: 'nama_pegawai', title:'Nama Pegawai'},
{key: 'departemen', title: 'Departemen'},
{key: 'roles', title: 'Roles'},
]

export default {
  data: () => ({
      userSimRS: '',
      dataUser: [],

  }),
  methods: {
      async getDataUser() {
          await fetch(
              `/api/user`
          )
              .then(response => response.json())
              .then(userSimRS => {
                  this.dataUser = userSimRS
              })
      },
  },
  created() {
      this.getDataUser()
  },
}
</script> -->

<template>
  <div class="dataproduk">
    <div class="row">
      <div class="col">
        <h2>Data User SIM RS</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="table-primary">NIP</th>
              <th scope="col" class="table-primary">Nama Pegawai</th>
              <th scope="col" class="table-primary">Departemen</th>
              <th scope="col" class="table-primary">NIPB</th>
              <th scope="col" class="table-primary">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="produk in dataUser"> <!--memasukkan data di tabel dr array dgn list rendering-->
              <td>{{ produk.nip }}</td>
              <td>{{ produk.nama_pegawai }}</td>
              <td>{{ produk.departemen }}</td>
              <td>{{ produk.nipb }}</td>
              <td>
                <v-btn value="Update" @click="getProdukbyId(produk)">Update</v-btn>
                <v-btn value="Delete" @click="hapusDataProduk(produk.product_id)">Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col">
        <h2>Form Produk</h2>
        <form @submit.prevent="onHandleSubmit"> <!-- the submit event will no longer reload the page -->
          <div class="mb-3">
            <label class="form-label">Nama Produk</label>
            <input v-model="inputNamaproduk" type="text" class="form-control" id="namaProduk">

          </div>
          <div class="mb-3">
            <label class="form-label">Harga Produk</label>
            <input v-model="inputHargaproduk" type="number" class="form-control" id="hargaProduk">

          </div>
          <button type="submit" class="btn" :disabled="inputNamaproduk == ''"
            :class="isUpdate ? 'btn-info' : 'btn-primary'">
            <!--kalau isUpdate true maka jadi button Update, kalau isUpdate false jadu button tambah-->
            {{ isUpdate ? 'Update' : 'Tambah' }}</button>
          <button v-if="isUpdate" type="button" class="btn btn-danger" @click="hapusInput">
            Cancel
          </button> <!--button Cancel ditampilkan ketika isUpdate = true-->
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'

const url = "http://localhost:3000";
const dataUser = ref([]);
const idProduk = ref("");
const inputNamaproduk = ref(""); //ref ini utk reaktif nya 
const inputHargaproduk = ref(0);
const inputNip = ref("");
const inputPwd = ref("");
const inputSesReg = ref("")
const inputKdPerawat = ref(0);
const inputKdDokter = ref(0);
const inputNamaPegawai = ref("");
const inputRoles = ref(0);
const inputKdUnit = ref(0);
const inputDepartemen = ref("");
const inputStDokterRajalEksekutif = ref(0);
const inputStDokterRajalEmergency = ref(0);
const inputNipb = ref("");
const inputAktif = ref(0);

const isUpdate = ref(false);

const getAllUser = async () => { // copas dari https://axios-http.com/docs/example
  try {
    const response = await axios.get(url + "/api/user");
    console.log(response); //cek datanya sudah masuk di console / belum
    dataUser.value = response.data; // data dari axios 
  } catch (error) {
    console.error(error);
  }
};

const hapusInput = () => {
  inputNip.value = "";
  inputPwd = "";
  inputSesReg = "";
  inputKdPerawat = 0;
  inputKdDokter = 0;
  inputNamaPegawai = "";
  inputRoles = 0;
  inputKdUnit = 0;
  inputDepartemen = "";
  inputStDokterRajalEksekutif = 0;
  inputStDokterRajalReguler = 0;
  inputStDokterRajalEmergency = 0;
  inputNipb = "";
  inputAktif = 0;
  idProduk.value = "";
  isUpdate.value = false;
}

const onHandleSubmit = async () => {
  try {
    if (isUpdate.value == false) {
      await axios.post(url + "/api/user", {
        nip : inputNip.value,
        pwd : inputPwd.value,
        ses_reg : inputSesReg.value,
        kdperawat : inputKdPerawat.value,
        kddokter : inputKdDokter.value,
        nama_pegawai : inputNamaPegawai.value,
        roles : inputRoles.value,
        kdunit : inputKdUnit.value,
        departemen : inputDepartemen.value,
        st_dokter_rajal_eksekutif : inputStDokterRajalEksekutif.value,
        st_dokter_rajal_reguler : inputStDokterRajalReguler.value,
        st_dokter_rajal_emergency : inputStDokterRajalEmergency.value,
        nipb : inputNipb.value,
        aktif : inputAktif.value

      });
      alert("berhasil tambah user baru");
    } else {
      await axios.put(url + "/api/user/" + idProduk.value, {
        nip : inputNip.value,
        pwd : inputPwd.value,
        ses_reg : inputSesReg.value,
        kdperawat : inputKdPerawat.value,
        kddokter : inputKdDokter.value,
        nama_pegawai : inputNamaPegawai.value,
        roles : inputRoles.value,
        kdunit : inputKdUnit.value,
        departemen : inputDepartemen.value,
        st_dokter_rajal_eksekutif : inputStDokterRajalEksekutif.value,
        st_dokter_rajal_reguler : inputStDokterRajalReguler.value,
        st_dokter_rajal_emergency : inputStDokterRajalEmergency.value,
        nipb : inputNipb.value,
        aktif : inputAktif.value
      });
      alert("berhasil update data user");
    }
    hapusInput();
    getAllUser();
  } catch (error) {
    console.log(error);
  }

};

const getProdukbyId = async (objekProduk) => {
  //console.log(objekProduk); //untuk mengecek
  inputNamaproduk.value = objekProduk.product_name;
  inputHargaproduk.value = objekProduk.product_price;
  idProduk.value = objekProduk.product_id;
  isUpdate.value = true;
}

const hapusDataProduk = async (product_id) => { 
  await axios.delete(url + "/products/" + product_id)
  alert("hapus data berhasil");
  getAllProduk();
};

onMounted(() => {
  getAllProduk();
}); //terapkan lifecycle hooks, gunakan onMounted, menjalankan code setelah component finish dirender
</script>
