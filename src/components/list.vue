<template>
    <container>
        <v-row class="ml-1">
            <v-col cols="3">
                <!-- <div class="ma-5"> -->
                <v-img
                src="@/assets/hot.jpg"
                width="300px"
                height="190px"
                > 
                </v-img>
                <h3>HOT DESK</h3>
                <br>
                <h5>Mulai dari</h5>
                <h4>IDR Rp 200.000/hari</h4>
                <v-btn class="ml-15" color="primary">more</v-btn>
                <!-- </div> -->
            </v-col>
            <v-col cols="3">
                <!-- <div class="ma-5"> -->
                <v-img
                src="@/assets/dedicated.jpg"
                width="300px"
                height="190px"
                > 
                </v-img>
                <h3>DEDICATED DESK</h3>
                <br>
                <h5>Mulai dari</h5>
                <h4>IDR Rp 2.700.000/bulan</h4>
                <v-btn class="ml-15" color="primary">more</v-btn>
                <!-- </div> -->
            </v-col>
            <v-col cols="3">
                <!-- <div class="ma-5"> -->
                <v-img
                src="@/assets/private.jpg"
                width="300px"
                height="190px"
                > 
                </v-img>
                <h3>PRIVATE OFFICE</h3>
                <br>
                <h5>Mulai dari</h5>
                <h4>IDR Rp 3.200.000/bulan</h4>
                <v-btn class="ml-15" color="primary">more</v-btn>
                <!-- </div> -->
            </v-col>
            <v-col cols="3">
                <!-- <div class="ma-5"> -->
                <v-img
                src="@/assets/virtual.jpg"
                width="300px"
                height="190px"
                > 
                </v-img>
                <h3>VIRTUAL OFFICE</h3>
                <br>
                <h5>Mulai dari</h5>
                <h4>IDR Rp 7.000.000/tahun</h4>
                <v-btn class="ml-15" color="blue lighten-1"  cf>more</v-btn>
                <!-- </div> -->
            </v-col>
        </v-row>



<v-row>
    <v-col cols="3">
            <v-card
                class="mx-auto"
                max-width="250"
              >
                <v-img
                  src="@/assets/hot.jpg"
                  height="200px"
                ></v-img>
            
                <v-card-title>
                  HOT DESK
                </v-card-title>
            
                <v-card-subtitle>
                  IDR Rp 200.000/hari
                </v-card-subtitle>
            
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
                  >
                    More
                  </v-btn>
            
                  <v-spacer></v-spacer>
            
                </v-card-actions>
            
            </v-card>
    </v-col>
    <v-col cols="3">
        <v-card
            class="mx-auto"
            max-width="250"
          >
            <v-img
              src="@/assets/dedicated.jpg"
              height="200px"
            ></v-img>
        
            <v-card-title>
              DEDICATED DESK
            </v-card-title>
        
            <v-card-subtitle>
              IDR Rp 2.300.000/bulan
            </v-card-subtitle>
        
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                More
              </v-btn>
        
              <v-spacer></v-spacer>
        
            </v-card-actions>
        
        </v-card>
</v-col>
<v-col cols="3">
    <v-card
        class="mx-auto"
        max-width="250"
      >
        <v-img
          src="@/assets/private.jpg"
          height="200px"
        ></v-img>
    
        <v-card-title>
          Top western road trips
        </v-card-title>
    
        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            More
          </v-btn>
    
          <v-spacer></v-spacer>
    
        </v-card-actions>
    
    </v-card>
</v-col>
<v-col cols="3">
    <v-card
        class="mx-auto"
        max-width="250"
      >
        <v-img
          src="@/assets/virtual.jpg"
          height="200px"
        ></v-img>
    
        <v-card-title>
          Top western road trips
        </v-card-title>
    
        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            More
          </v-btn>
    
          <v-spacer></v-spacer>
    
        </v-card-actions>
    
    </v-card>
</v-col>

</v-row>
    </container>
</template>

<style>
.btn{
    color: white;

}
</style>