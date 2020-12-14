<template>
    <container>
        <v-row>
            <v-col>
                <card 
                foto="cool"
                kota="Bandung"
                deskripsi="Bandung mempunyai banyak tempat coworking space yang sangat luas"
                lihat="lihat selengkapnya"
                >
            </card>
            </v-col>
        </v-row>
    </container>
</template>
<script>
    import card from '@/components/space/Card';
    import cool from '@/assets/1.jpg'
    export default{
        data(){
            return{
                cool

            }
        },
        components:{
            card
            
        }
    }
</script>