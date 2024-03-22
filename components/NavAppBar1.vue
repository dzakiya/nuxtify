<template>
    <v-navigation-drawer :width="350" v-model="drawer">
        <v-list-item title="My Application" subtitle="Satu Data untuk RSSA"></v-list-item>
        <v-divider></v-divider>
        <br>
        <v-responsive class="mx-auto" max-width="320">
            <v-text-field label="" variant="outlined" placeholder="Search Collections..."></v-text-field></v-responsive>
        <v-divider></v-divider>
        <!--START-->
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
        <!--END-->
    </v-navigation-drawer>

    <!--START APP BAR-->
    <v-app-bar color="primary">

        <template v-slot:prepend>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
    <!--END APP BAR-->

</template>

<script>

export default {

    data: () => ({
        drawer: true, //untuk resize dan buka tutup drawer

        buka1: ['Kepegawaian', 'Modul Kepegawaian'],
        buka2: ['PPI', 'Modul PPI', 'Modul Data Cuci Tangan', 'Modul Data Apd'],
        buka3: ['Antrian Operasi', 'Modul Antrian Operasi'],
        buka4: ['SPT', 'Modul SPT'],
        buka5: ['Sensus', 'Modul Sensus'],
    }),

}

</script>