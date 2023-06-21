<template>
    <div class="home bg-dark">
        <Navbar />
        <Cardchar />
        <card-liyue />
        <cardinazuma />
        <cardsemeru />
        <bagianbawah />
        <Bawahgambar />
    </div>
</template>

<script>
// bagian untuk import componnent (componen buat isi tampilan navbar,dll)
import Navbar from '@/components/Navbar.vue';
import Cardchar from '@/components/Cardchar.vue';
import CardLiyue from '@/components/CardLiyue.vue';
import Cardinazuma from '@/components/Cardinazuma.vue';
import Cardsemeru from '@/components/Cardsemeru.vue';
import Bagianbawah from '@/components/Bagianbawah.vue';
import Bawahgambar from '@/components/Bawahgambar.vue';

// untuk memanggil variable import diatas
export default {
    name: 'HomeCard',
    components: {
        Navbar,
        Cardchar,
        CardLiyue,
        Cardinazuma,
        Cardsemeru,
        Bagianbawah,
        Bawahgambar,
    }
}
</script>
  