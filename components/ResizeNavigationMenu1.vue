<template>
    <VResizeDrawer v-model="drawer" min-width="256" max-width="50%"> <!--START RESIZE DRAWER-->
        <!--kalau dikecilkan layarnya, di klik 2x baru muncul sidebar-nya-->
        <!--kalau direload muncul Cannot read properties of undefined (reading 'innerWidth')-->
        
        <v-list-item title="My Application" subtitle="Satu Data untuk RSSA"></v-list-item>
        <v-divider></v-divider>
        <br>
        <v-responsive class="mx-auto" max-width="320">
            <v-text-field label="" variant="outlined" placeholder="Search Collections..."></v-text-field></v-responsive>
        <v-divider></v-divider>
        <v-list v-model:opened="buka1"> <!--START-->

            <v-list-group value="Kepegawaian">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home">Kepegawaian</v-list-item>
                </template>
                <v-list-group value="Modul Kepegawaian">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul Kepegawaian</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-pegawai1"
                        title="Data Pegawai 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-pegawai2"
                        title="Data Pegawai 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-pegawai3"
                        title="Data Pegawai 3"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka2">
            <v-list-group value="PPI">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home">PPI</v-list-item>
                </template>
                <v-list-group value="Modul PPI">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul PPI</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data PPI 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data PPI 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data PPI 3"></v-list-item>
                </v-list-group>
                <v-list-group value="Modul Data Cuci Tangan">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul Data Cuci Tangan</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data Cuci Tangan 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data Cuci Tangan 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data Cuci Tangan 3"></v-list-item>
                </v-list-group>
                <v-list-group value="Modul Data Apd">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul Data Apd</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data Apd 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data Apd 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-ppi"
                        title="Data Apd 3"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka3">
            <v-list-group value="Antrian Operasi">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home">Antrian Operasi</v-list-item>
                </template>
                <v-list-group value="Modul Antrian Operasi">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul Antrian Operasi</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-antrian-operasi"
                        title="Data Antrian Operasi 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-antrian-operasi"
                        title="Data Antrian Operasi 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-antrian-operasi"
                        title="Data Antrian Operasi 3"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka4">
            <v-list-group value="SPT">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home">SPT</v-list-item>
                </template>
                <v-list-group value="Modul SPT">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul SPT</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-spt"
                        title="Data SPT 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-spt"
                        title="Data SPT 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-spt"
                        title="Data SPT 3"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>

        <v-list v-model:opened="buka5">
            <v-list-group value="Sensus">

                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-home">Sensus</v-list-item>
                </template>
                <v-list-group value="Modul Sensus">

                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-home">Modul Sensus</v-list-item>
                    </template>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-sensus"
                        title="Data Sensus 1"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-sensus"
                        title="Data Sensus 2"></v-list-item>
                    <v-list-item prepend-icon="mdi-table-account" to="/content/data-sensus"
                        title="Data Sensus 3"></v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>
        <!--END-->

    </VResizeDrawer> <!--END OF RESIZE DRAWER-->

    <v-app-bar color="primary" prominent> <!--START APP BAR-->
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify Resize Drawer v3.1.1</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-icon icon="mdi:mdi-github" />
        <v-icon icon="mdi:mdi-npm" />

    </v-app-bar> <!--END OF APP BAR-->

</template>

<script>
import VResizeDrawer from '@wdns/vuetify-resize-drawer' //untuk resize drawer

export default {
    components: {
        VResizeDrawer,
    },
    data: () => ({
        drawer: true, //untuk resize dan buka tutup drawer
        group: null,
        buka1: ['Kepegawaian', 'Modul Kepegawaian', 'Modul SPT', 'Modul Sensus'],
        buka2: ['PPI', 'Modul PPI', 'Modul Data Cuci Tangan', 'Modul Data Apd'],
        buka3: ['Antrian Operasi', 'Modul Antrian Operasi'],
        buka4: ['SPT', 'Modul SPT'],
        buka5: ['Sensus', 'Modul Sensus'],

    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>