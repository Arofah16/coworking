<!-- <template>
    <v-form>
        <v-container>
            <v-row class="mt-15">
                <v-col cols="12" sm="6" md="3" >
                    <v-card  class="mx-auto my-auto"  justify="center"  outlined>
                        <v-text-field label="nama" placeholder="Masukkan Nama" outlined>
                        </v-text-field>
                        <v-text-field label="No. HP" placeholder="Masukkan nomer hp" outlined>
                        </v-text-field>
                        <v-text-field label="No. Email" placeholder="Masukkan Email" outlined>
                        </v-text-field>
                        <v-text-field label="Tanggal Booking" placeholder="dd/mm/yyyy" outlined>
                        </v-text-field>
                        <v-btn color="green">SIMPAN</v-btn>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </v-form>
</template> -->
<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>
  
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script>
      export default{
          data(){
              return{
                  dialog:false
              }
          }
      }
  </script>