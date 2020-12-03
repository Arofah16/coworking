<template>
  <div>
    <v-text-field v-model="isi.fasilitas" label="masukan fasilitas"></v-text-field>
    <v-text-field v-model="isi.orang" label="masukkan Jumlah Orang"></v-text-field>
    <v-text-field v-model="isi.waktu" label="masukkan Estimasi Waktu "></v-text-field>
    <v-text-field v-model="isi.harga" label="masukkan Harga Sewa ">{{isi.harga}}</v-text-field>
    <v-btn color="orange" @click="addSpace">Tambah Space</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>NO</th>
            <th>Fasilitas</th>
            <th>Jumlah Orang</th>
            <th>Estimasi Waktu Sewa</th>
            <th>Harga Sewa</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in add" :key="index">
            <td>{{index +1}}</td>
            <td>{{ item.fasilitas }}</td>
            <td>{{ item.orang}}</td>
            <td>{{ item.waktu}}</td>
            <td>{{ item.harga}}</td>
            <td>
              <v-btn color="green">edit</v-btn>
              <v-btn @click="deleteSpace(index)" >Hapus</v-btn>
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
          fasilitas: "",
          orang: "",
          waktu: "",
          harga: ""
        },
      }
    },
    computed: {
      add() {
        return this.$store.state.listIsi
      }
    },
    methods: {
      addSpace() {
        this.$store.commit("addSpace", this.isi)
      },
      deleteSpace(index){
        this.$store.commit("DELETE_space",index)
      }
      
    }
  }
</script>
deleteCar(car) {
  this.$store.commit('DELETE_CAR', car);
}