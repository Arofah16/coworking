<template>
  <div>
    <!-- <v-text-field v-model="isi.fasilitas" label="masukan fasilitas"></v-text-field>
    <v-text-field v-model="isi.orang" label="masukkan Jumlah Orang"></v-text-field>
    <v-text-field v-model="isi.waktu" label="masukkan Estimasi Waktu "></v-text-field>
    <v-text-field v-model="isi.harga" label="masukkan Harga Sewa "></v-text-field>
    <v-btn color="orange" @click="addSpace">Tambah Space</v-btn> -->
    <!-- <v-simple-table>
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
            <td>{{index +1}}
            </td>
            <td> <span v-if="showSpace">{{ item.fasilitas}}</span>
              <v-text-field v-if="saveSpace" v-model="editDataSpace.fasilitas"></v-text-field>
            </td>
            <td> <span v-if="showSpace">{{ item.orang}}</span>
              <v-text-field v-if="saveSpace" v-model="editDataSpace.orang"></v-text-field>
            </td>
            <td><span v-if="showSpace">{{ item.waktu}}</span>
              <v-text-field v-if="saveSpace" v-model="editDataSpace.waktu"></v-text-field>
            </td>
            <td> <span v-if="showSpace">{{ item.harga}}</span>
              <v-text-field v-if="saveSpace" v-model="editDataSpace.harga"></v-text-field>
            </td>
            <td>
              <v-btn @click="saveSpaces(index)" color="primary">save</v-btn>
              <v-btn @click="editSpace(index)" color="green">edit</v-btn>
              <v-btn @click="deleteSpace(index)" color="red">Hapus</v-btn>
            </td>
          </tr>
        </tbody>
        <v-divider></v-divider>

      </template>
    </v-simple-table> -->
    <h3>Daftar Booking </h3>
    <v-simple-table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>No.HP</th>
          <th>Tanggal Booking</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.getPendaftar" :key="index">
          <td>{{item.nama}}</td>
          <td>{{item.email}}</td>
          <td>{{item.HP}}</td>
          <td>{{item.booking}}</td>
        </tr>
      </tbody>
    </v-simple-table>
    
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

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
        saveSpace: false,
        editDataSpace: {
          fasilitas: "",
          orang: "",
          waktu: "",
          harga: ""
        },
        showSpace: true
      }
    },
    computed: {
      add() {
        return this.$store.state.listIsi
      },
      ...mapGetters([
        'getPendaftar'
      ])
    },
    methods: {
      addSpace() {
        this.$store.commit("addSpace", this.isi)
      },
      deleteSpace(index) {
        this.$store.commit("DELETE_space", index)
      },
      editSpace(index) {
        this.showSpace = false
        this.saveSpace = true;
        this.editDataSpace.fasilitas = this.add[index].fasilitas;
        this.editDataSpace.orang = this.add[index].orang;
        this.editDataSpace.waktu = this.add[index].waktu;
        this.editDataSpace.harga = this.add[index].harga;
        // console.log(this.editDataSpace)
      },
      saveSpaces(index) {
        const data = this.editDataSpace
        console.log(data)
        this.$store.commit("EDIT_space", { index, data })
        this.showSpace = true
        this.saveSpace = false;

        // console.log(this.add)
      }
    }
  }
</script>