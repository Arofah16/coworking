<template>
  <!-- <section> -->
    <v-app-bar fixed flat color="#CFD8DC" app

    >
      <v-toolbar-title color="#F57C00" style="font-weight: bold;">
        CO-SOLID
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="black" class="text-capitalize" link to="/">
        HOME
      </v-btn>
      <v-btn text color="black" class="text-capitalize " link to="/space">
        SPACE
      </v-btn>
      <v-btn text color="black" class="text-capitalize" link to="/location">
        LOCATION
      </v-btn>
      <v-btn text color="black" class="text-capitalize ">
        GALLERY
      </v-btn>
      <v-btn text color="black" class="text-capitalize " link to="/admin">
        ADMIN
      </v-btn>

    </v-app-bar>
  <!-- </section> -->
</template>
<script>
  // export default{
  //   name:"home",
  //   data:()=>({
  //     scrollPosition: null,
  //   }),
  //   computed:{
  //     change_color(){
  //       return this.scrollPosition > 200;
  //     },
  //   },
  //   method:{
  //     updatescroll(){
  //       return this.scrollPosition = window.scrollY;
  //     },
  //   },
  //   mouted(){
  //     window.addEventListener("scroll",this.updatescroll);
  //   },
  // };
</script>
<style scoped>
  /* .change-color {
  background-color: red;
} */

</style>