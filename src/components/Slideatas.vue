<template>
  <div id="carouselExampleAutoplaying" class="p-4 carousel slide rounded" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/GenshinImpact.jpg" class="d-block w-100 rounded" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome To Genshin Universe</h5>
          <p>Ini Cewe Mimin</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/Mondo.jpg" class="d-block w-100 rounded" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Mondstadt</h5>
          <p>Two Strongest People On Mondostadt</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/Liyue.jpg" class="d-block w-100 rounded" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Liyue</h5>
          <p>Lantern Rite On Liyue Harbor 2022</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/Inazuma.jpg" class="d-block w-100 rounded" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Inazuma</h5>
          <p>Raiden Ei with his best friend Yae Miko</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/Semeru.jpg" class="d-block w-100 rounded" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Semeru</h5>
          <p>The fight of scaramouche and dottore from fatui</p>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MySlide',
}
</script>