<template>
  <div class="home bg-dark">
    <Navbar/>
    <Slideatas/>
    <!-- <router-link class="btn btn-primary paragraf" :to="'/HomeCard'">Detail Char</router-link> -->
    <footers/>
  </div>
</template>

<script>
// bagian untuk import componnent (componen buat isi tampilan navbar,dll)
import Navbar from '@/components/Navbar.vue';
import Slideatas from '@/components/Slideatas.vue';
import Footers from '@/components/footers.vue';


// untuk memanggil variable import diatas
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Slideatas,
    Footers,
}
}
</script>