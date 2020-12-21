<template>
  <container>
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="250">
          <v-img :src="foto" height="200px"></v-img>

          <v-card-title>
            {{kota}}
          </v-card-title>

          <v-card-subtitle>
            {{deskripsi}} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              {{lihat}} </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="250">
          <v-img src="@/assets/ruang-rapat.jpg" height="200px"></v-img>

          <v-card-title>
            Ruang Rapat
          </v-card-title>

          <v-card-subtitle>
            Disediakan sebuah ruang rapat maksimal peserta 20 orang , full AC, Proyektor
            </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              lihat selengkapnya </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="250">
          <v-img src="@/assets/private.jpg" height="200px"></v-img>

          <v-card-title>
            Privat Room
          </v-card-title>

          <v-card-subtitle>
            Tersedia sebuah Meja dan 3 buah tempat duduk yang nyaman
            </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              lihat selengkapnya </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto" max-width="250">
          <v-img src="@/assets/ruang-rapat1.jpg" height="200px"></v-img>

          <v-card-title>
            Cafetaria
          </v-card-title>

          <v-card-subtitle>
            Meyediakan Cafe  
            </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text>
              lihat selengkapnya </v-btn>

            <v-spacer></v-spacer>

          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </container>
</template>
<script>
  export default {
    props: ['foto', 'kota', 'deskripsi', 'lihat']
  }

</script>

<style>
  .btn {
    color: white;

  }
</style>