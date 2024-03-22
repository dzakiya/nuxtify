<template>
            <v-list v-model:opened="buka1" :lines="false" density="compact" nav>
            <v-list-group value="Kepegawaian">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-account-group"
                        color="primary" class="text-subtitle-2">Kepegawaian</v-list-item>
                </template>
                <v-list-group value="Modul Kepegawaian">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul
                            Kepegawaian</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/kepegawaian/data-pegawai1"
                        title="Data Pegawai 1" color="primary" rounded="xl"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/kepegawaian/data-pegawai2"
                        title="Data Pegawai 2" color="primary" rounded="xl"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/kepegawaian/data-pegawai3"
                        title="Data Pegawai 3" color="primary" rounded="xl"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka2" :lines="false" density="compact" nav>
            <v-list-group value="PPI">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-doctor" color="primary" class="text-subtitle-2">PPI</v-list-item>
                </template>
                <v-list-group value="Modul PPI">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul PPI</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/ppi/data-ppi"
                        title="Data PPI 1" color="primary" rounded="xl"></v-list-item>
                    <!--bisa ditambah lagi di bawah sini-->
                </v-list-group>
                <v-list-group value="Modul Data Cuci Tangan">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul Data Cuci Tangan</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/ppi/data-cuci-tangan"
                        title="Data Cuci Tangan 1" color="primary" rounded="xl"></v-list-item>
                </v-list-group>
                <v-list-group value="Modul Data Apd">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul Data Apd</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/ppi/data-apd"
                        title="Data Apd 1" color="primary" rounded="xl"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka3" :lines="false" density="compact" nav>
            <v-list-group value="Antrian Operasi">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-content-cut" color="primary" class="text-subtitle-2">Antrian Operasi</v-list-item>
                </template>
                <v-list-group value="Modul Antrian Operasi">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul Antrian Operasi</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/antrianoperasi/data-antrian-operasi"
                        title="Data Antrian Operasi 1" color="primary" rounded="xl"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka4" :lines="false" density="compact" nav>
            <v-list-group value="SPT">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home" color="primary" class="text-subtitle-2">SPT</v-list-item>
                </template>
                <v-list-group value="Modul SPT">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul SPT</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/spt/data-spt"
                        title="Data SPT 1" color="primary" rounded="xl"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka5" :lines="false" density="compact" nav>
            <v-list-group value="Sensus">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home" color="primary" class="text-subtitle-2">Sensus</v-list-item>
                </template>
                <v-list-group value="Modul Sensus">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-database" color="primary" class="text-subtitle-2">Modul Sensus</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/sensus/data-sensus"
                        title="Data Sensus 1" color="primary" rounded="xl"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>
</template>

<script>

definePageMeta({
  layout :'setting'
})
  export default {
    data: () => ({
        buka1: ['Kepegawaian', 'Modul Kepegawaian'],
        buka2: ['PPI', 'Modul PPI', 'Modul Data Cuci Tangan', 'Modul Data Apd'],
        buka3: ['Antrian Operasi', 'Modul Antrian Operasi'],
        buka4: ['SPT', 'Modul SPT'],
        buka5: ['Sensus', 'Modul Sensus'],
    }),

  }
</script>