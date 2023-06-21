<template>
  <div class="home bg-dark">
    <navbar />
    <div class="container-fluid bg-dark d-flex flex-row justify-content-evenly gap-5 p-5 flex-wrap">
      <div class="card" style="width: 15rem;">
        <div class="card text-light" style="background-color: #343a40;">
          <img :src="card.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text">{{ card.umur }}</p>
            <p class="card-text">{{ card.asal }}</p>
            <p class="card-text">{{ card.vision }}</p>
            <p class="card-text">{{ card.constelasi }}</p>
            <p class="card-text">{{ card.senjata }}</p>
            <a href="#" class="btn btn-primary">Char Story</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
// bagian untuk import componnent (componen buat isi tampilan navbar,dll)
// import detailkarakter from '@/components/detailkarakter.vue';
import axios from "axios";
import navbar from "../components/Navbar.vue"

export default {
  name: 'CharDetailView',

  components: {
    navbar,
  },

  data() {
    return {
      card: {},
    }
  },
  methods: {
    setCard(data) {
      this.card = data
    }
  },
  mounted() {
    //API MONDO
    axios
      .get("https://projectuas-one.vercel.app/mondo/" + this.$route.params.id)
      .then((response) => {
        this.setCard(response.data)
      })
      .catch((error) => console.log(error));

    //API LIYUE
      axios
      .get("https://projectuas-one.vercel.app/liyue/" + this.$route.params.id)
      .then((response) => {
        this.setCard(response.data)
      })
      .catch((error) => console.log(error));

    //API INAZUMA
      axios
      .get("https://projectuas-one.vercel.app/inazuma/" + this.$route.params.id)
      .then((response) => {
        this.setCard(response.data)
      })
      .catch((error) => console.log(error));

    //API SEMERU
      axios
      .get("https://projectuas-one.vercel.app/semeru/" + this.$route.params.id)
      .then((response) => {
        this.setCard(response.data)
      })
      .catch((error) => console.log(error));
  },
};
</script>