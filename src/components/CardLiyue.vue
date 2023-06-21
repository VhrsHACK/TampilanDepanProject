<!-- Char Character Manusia /Mondo,Liyue,Inazuma,Semeru -->
<template>
    <!-- Percobaan Ke 4 -->    
    <div class="container bg-dark">
  <div class="container-indicators">
    <div class="indicator active" data-index=0></div>
    <div class="indicator" data-index=1></div>
    <div class="indicator" data-index=2></div>
  </div>
  <div class="slider" id="mySlider">
    <h1 class="bold text-light" style="margin-right: 100%;">Liyue Harbor</h1>
    <div class="movie" v-for="card in cards" :key="card.id" id="movie0" >
      <img :src="card.image" alt="" srcset=""/>
       <div class="description">
        <div class="description__text-container">
          <h4 class="description__match" style="margin-bottom: 5%;"><strong>{{ card.name }}</strong></h4>
          <!-- <charDetail /> -->
          <!-- <a href="../views/chardetail.vue" class="btn btn-primary">Lihat Selengkapnya</a> -->
          <router-link class="btn btn-primary" :to="'/detailliyue/' + card._id">
            Detail Char</router-link>
        </div>
      </div>
    </div>
  </div>
</div> <!-- Penutup Class Div  -->
</template>

<script>
import axios from "axios";
// import charDetail from "../views/CharDetailView.vue";

export default {
  name: 'LiyueCard',
  // components:{
  //   charDetail
  // },

  data() {
    return {
      cards: [],
      // liyue: []  
    }
  },
  methods: {
    setCards(data) {
      this.cards = data
    },
    // setLiyue(dataliyue) {
    //   this.cards = data
    // }
  },
  mounted() {
    axios
      .get("https://projectuas-one.vercel.app/liyue")
      .then((response) => {
        this.setCards(response.data)
      })
      .catch((error) => console.log(error));
  }
};
</script>
<style>
        :root {
  --movie-width: 15.5vw;
  --movie-height: 200px;
  --arrow-width: 50px;
  --slider-py: 170px;
}
@media only screen and (max-width: 1000px) {
  :root {
    --movie-width: 25vw;
  }
}

/*
*
* THE SLIDER CONTAINER
*
*********************************/
.slider {
  width: 100%;
  overflow-x: scroll;
  overflow-y: visible;
  white-space: nowrap;
  position: relative;
  padding-top: 10px;
  padding-bottom: var(--slider-py);
}

/*
*
* SLIDER INDICATORS
*
*********************************/
.container-indicators {
  width: 100px;
  position: absolute;
  right: 0;
  top: calc(var(--slider-py) - 60px);
  visibility: hidden;
}
.indicator {
  width: 15px;
  height: 2px;
  background-color: grey;
  display: inline-block;
}
.indicator.active {
  background-color: white;
}

/*
*
* MOVIE ELEMENTS!
*
*********************************/
.movie {
  width: var(--movie-width);
  height: var(--movie-height);
  display: inline-block;
  position: relative;
  color: white;
  padding: 0 2px;
  font-size: 0.8rem;
  transition: all 0.8s ease-in-out;
}

.movie:nth-of-type(1) {
  margin-left: var(--arrow-width);
}

.movie:hover {
  transform: scale(1.3);
  z-index: 2;
}

.movie img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.description {
  position: absolute;
  display: none;
  z-index: 9999;
  background-color: #272727;
  width: var(--movie-width);
  margin-top: -10px;
  padding: 10px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* Make description visible when movie is hovered */
.movie:hover > .description {
  display: block;
}

.movie:hover > img {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.description__buttons-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.description__text-container {
  padding: 10px;
}

.description__match {
  color: rgb(255, 255, 255);
  text-align: center;
}

.description__rating {
  outline: 1px solid white;
  padding: 0 3px;
  margin: 0 5px;
}

.description__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  text-align: center;
  font-size: 8px;
  margin-right: 5px;
  border-radius: 100%;
}

.description__button:hover {
  border-color: grey;
  color: grey;
  cursor: pointer;
}

.description__button:nth-of-type(5) {
  margin-left: auto;
  margin-right: 0;
}

/*
*
* BUTTONS
*
*********************************/
.btn-nav {
  width: var(--arrow-width);
  height: var(--movie-height);
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  color: white;
  top: var(--slider-py);
  z-index: 5;
  visibility: hidden;
}

#moveLeft {
  left: 0;
}

#moveRight {
  right: 0;
}

.container:hover .btn-nav,
.container:hover .container-indicators {
  visibility: visible;
}
</style>