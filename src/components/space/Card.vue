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