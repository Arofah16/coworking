<template>
    <section :style="{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
          'url(' +
          require('@/assets/room.jpg') +
          ')',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        height: '100vh',
      }" class="px-5">
        <v-row style="align-items: center; height: 100%;">
            <v-col cols="12" offside-md="15">
                <h1 style="font-size: 3em; color:white;">
                    Reimagine Your <br> Workspace
                </h1>
                <p style="color:white;">
                    Whether you’re an established enterprise <br />
                    or a growing startup, discover flexible <br />
                    spaces and solutions to move <br />
                    your business forward.
                </p>
                <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="white" v-bind="attrs" v-on="on">
                            BOOK NOW
                        </v-btn>
                    </template>

                    <v-card>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="form.nama" label="Nama"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="form.email" label="Email" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="form.HP" label="No. HP" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="form.booking" label="Tanggal Booking" required>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false">
                                Batal
                            </v-btn>
                            <v-btn color="primary" text @click="save">
                                Simpan
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                dialog: false,
                form: {
                    nama: "",
                    email: "",
                    HP: "",
                    booking: "",
                }
            }
        },
        computed: {
            ...mapGetters([
                'getPendaftar'
            ])
        },
        methods: {
            save(){
                this.$store.dispatch('addPendaftar', this.form)
                console.log(this.getPendaftar)
            }
        }
    }
</script>