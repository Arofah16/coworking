<template>
    <div>
        <v-carousel-item>
            <v-sheet :color="warna" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col cols="6">
                        <v-card :loading="loading" class="mx-auto my-6" max-width="500" max-height="500">

                            <v-img height="250" :src="src"></v-img>


                        </v-card>
                    </v-col>
                    
                    <v-col cols="6">
                        <v-card :loading="loading" class="mx-auto my-6" max-width="500" max-height="500">
                            <v-card-title>{{title}}</v-card-title>
                            <v-card-subtitle>{{alamat}}</v-card-subtitle>
                            <v-card-text>{{deskripsi}}
                            </v-card-text>
                            <v-btn>LOCATION</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </div>
</template>
<script>
    export default{
    props:['title','alamat','deskripsi','warna', 'src']
    }
</script>