<template>
    <section>
        <!--  -->
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <card
                title="ANTOLOGI"
                alamat="TAWANGSARI ct II Gang Gayamsari II No F9C"
                deskripsi="Coworking space dengan konsep modern dan menyatu dengan Coffe Shop ,tempat luas dengan bangunan fasat tinggi , dan terasa nyaman"
                warna="#B0BEC5"
                :src="dedicated"
            />
            <card
            title="EKOLOGI"
            alamat="Jln Pandeyan sari blok IV No 10A ,Candok, Condongcatur, Kec Depok, Kab Sleman , Yogyakarta"
            deskripsi="lokasi sangat strategis, tempat yang sangat luas , ada dua lantai untuk membership coworking berada di lantai 2 dan untuk pengunjung umum ada dilantai 1"
            warna="grey"
            :src="hot"
        />
        <card
            title="SINERGI"
            alamat="Jln Cendrawasih No 32b Mrican , Demangan , Kec Depok , Kab SLeman, Yogyakarta"
            deskripsi="lokasi sangat strategis, tempat yang sangat nyaman , serta menyediakan fasilitas lengkap"
            warna="#ECEFF1"
            :src="pri"
        />
        </v-carousel>
    </section>
</template>
<script>
import card from './Carousel';
import dedicated from '@/assets/dedicated.jpg';
import hot from '@/assets/hot.jpg';
import pri from '@/assets/private.jpg';
    export default {
        data(){
            return{
                dedicated,
                hot,
                pri
            }
        },
        components: {
            card
        }
    }
</script>