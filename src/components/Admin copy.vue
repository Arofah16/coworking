<template>
  <div>
    <v-row>
      <v-card v-for="space in spaceBaru" :key="space.foto" class="mx-auto" max-width="344">
        <v-img :src="space.foto" height="200px"></v-img>

        <v-card-title>
        </v-card-title>

        <v-card-subtitle>
          {{space.deskripsi}}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text>
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>
<script>
  export default {
    computed: {
      kategori(){
        return this.$store.state.spacebaru
      }
    },
    data() {
      return {
        spaceBaru: [
          {
            foto: "https://asset.kompas.com/crops/SI9nTULNDcE7kJH8zH7gnNdzdzo=/2x80:818x625/750x500/data/photo/2018/08/16/1361807940.jpg",
            nama: "kategory",
            deskripsi: "lokasi nyaman"
          },
          {
            foto: "https://img.okezone.com/content/2018/10/11/470/1962574/depok-moratorium-pembangunan-gedung-bertingkat-HRwlUks1wr.jpg",
            nama: "kategory",
            deskripsi: "fasilitas lengkap dan terjangkau"
          },
          {
            foto: "https://bigalpha.id/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9JYTJWNVNTSm5kbUZ5YVdGdWRITXZOVlpwYlVkQ2FrczRkemR3Y1RWbWNHMVpPR2REZVhBNUx6Y3dNakl4WVdVM1pUWTNaRGMyTVRBek1XUXlNMk01TldWbE1HUTBOVEprTm1VeU1ERXpZMlEyTTJZMU16azBPRFkzWlRWaU5qRTJZV0pqT1RaaU0yUUdPZ1pGVkRvUVpHbHpjRzl6YVhScGIyNUpJbUZwYm14cGJtVTdJR1pwYkdWdVlXMWxQU0p6YUhWMGRHVnljM1J2WTJ0Zk1UQXhNVEkyT1RrNU5TNXFjR2NpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjNOb2RYUjBaWEp6ZEc5amExOHhNREV4TWpZNU9UazFMbXB3WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraUQybHRZV2RsTDJwd1pXY0dPd1pVIiwiZXhwIjoiMjAyMC0xMi0wMVQwOToxMzoyOC40MTVaIiwicHVyIjoiYmxvYl9rZXkifX0=--865db6cc15ebc528ef195f230ae91b328128f444/shutterstock_1011269995.jpg?content_type=image%2Fjpeg&disposition=inline%3B+filename%3D%22shutterstock_1011269995.jpg%22%3B+filename%2A%3DUTF-8%27%27shutterstock_1011269995.jpg",
            nama: "kategory",
            deskripsi: "terletak di lokasi strategis"
          }
        ],
        space: {
          foto: "",
          nama: "",
          deskripsi: ""
        },
      }
    }
  }

</script>