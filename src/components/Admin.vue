<template>
  <div>
    <v-text-field v-model="isi.fasilitas" label="masukan fasilitas"></v-text-field>
    <v-text-field  v-mdel="isi.orang" label="masukkan Jumlah Orang"></v-text-field>
    <v-text-field v-model="isi.waktu" label="masukkan Estimasi Waktu "></v-text-field>
    <v-text-field v-model="isi.harga" label="masukkan Harga Sewa ">{{isi.harga}}</v-text-field>
    <v-btn color="orange" @click="addSpace">Tambah Space</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Fasilitas
            </th>
            <th class="text-left">
              Jumlah Orang
            </th>
            <th class="text-left">
              Estimasi Waktu Sewa
            </th>
            <th class="text-left">
              Harga Sewa
            </th>
            <th class="text-left">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in isi" :key="item.Fasilitas">
            <td>{{ item.Fasilitas }}</td>
            <td>{{ item.orang}}</td>
            <td>{{ item.waktu}}</td>
            <td>{{ item.harga}}</td>
            <td>
              <v-btn color="green">edit</v-btn>
              <v-btn>Hapus</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isi: 
          {
            Fasilitas: "",
            orang: "",
            waktu: "",
            harga: ""
          },
      }
    },
    // computed: {
    //   add() {
    //     return this.$store.state.isi
    //   }
    // },
    methods: {
      addSpace() {
        this.$store.dispatch('')
            }
    }
  }
</script>