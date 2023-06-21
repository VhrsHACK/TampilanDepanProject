<template>
    <div>
        <navbar />
        <div class="container-fluid bg-dark d-flex flex-row justify-content-evenly gap-5 p-5 flex-wrap">
            <div class="card" v-for="card in cards" :key="card.id" style="width: 15rem;">
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
import axios from "axios";
import navbar from "../components/Navbar.vue"

export default {
    name: 'MyDetail',

    components: {
        navbar,
    },

    data() {
        return {
            cards: [],
        }
    },
    methods: {
        setCards(data) {
            this.cards = data
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        axios
            .get("https://projectuas-one.vercel.app/inazuma/" + this.$route.params.id)
            .then((response) => {
                this.setCards(response.data)
            })
            .catch((error) => console.log(error));
    }
};
</script>
