<template>
    <div class="home bg-dark">
        <navbar/> 
        <SosMed/>
  </div>

</template>

<script>
// bagian untuk import componnent (componen buat isi tampilan navbar,dll)
import Navbar from '@/components/Navbar.vue';
import SosMed from '@/components/SosMed.vue';


// untuk memanggil variable import diatas
export default {
    name: 'SosmedHome',
    components: {
        Navbar,
        SosMed
        
    }
}
</script>