<template>
    <v-footer padless >
      <v-card
      class="flex"
      flat
      tile
      color="#CFD8DC"
    >
      <v-card-title > 
        <strong class="subheading">get convenience in building your business with us</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 text-center">
        {{ new Date().getFullYear() }} — <strong>CO-SOLID</strong>
      </v-card-text>
    </v-card>
      </v-footer>
</template>
<script>
  export default{
    data:()=>({
      icons:[
        'mdi-facebook',
        'mdi-twitter',
        'mdi-email',
      ],
    }),
  }
</script>