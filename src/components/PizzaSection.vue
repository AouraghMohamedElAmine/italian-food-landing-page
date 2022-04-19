<template>
  <div class="md:px-20 text-white py-10 relative cont px-5">
    <h1 class="text-center header z-10">Occaecat Ullamco Alquip</h1>
    <p class="text-center md:text-2xl md:px-24 my-4 px-5 z-50">
      i Magna eu qui dolor qui. Qui eiusmod amet irure est occaecat pariatur ut
      Aliqua irure consectetur cillum ullamco nisi eu.
    </p>
    <div class="w-28 h-2 bg-white mx-auto"></div>
    <img
      data-aos-duration="1500"
      data-aos="zoom-in"
      :src="pizza"
      class="pizza"
    />
    <img
      data-aos-duration="3000"
      data-aos="fade-up"
      :src="leafs"
      class="leafs hidden lg:block"
    />
    <img
      data-aos-duration="3000"
      data-aos="fade-up"
      :src="threeLeafs"
      class="threeLeafs hidden lg:block"
    />
  </div>
</template>

<script>
import pizza from "../assets/img/pizzaFromTop.png";
import leafs from "../assets/img/manyLeafs.png";
import threeLeafs from "../assets/img/threeLeafs.png";

export default {
  data() {
    return {
      pizza: pizza,
      leafs: leafs,
      threeLeafs: threeLeafs,
    };
  },
};
</script>

<style scoped>
.cont {
  height: 700px;
}
.pizza {
  position: absolute;
  bottom: -100px;
  scale: 1.4;
  right: calc(50% - 250px);
}
.threeLeafs {
  height: 450px;
  width: 300px;
  position: absolute;
  left: 20px;
  top: 100px;
  z-index: 10;
}
.leafs {
  height: 450px;
  width: 200px;
  position: absolute;
  right: 20px;
  top: 100px;
  z-index: 10;
}
.header {
  font-family: "Vujahday Script", cursive;
  font-size: 70px;
}
@media only screen and (max-width: 600px) {
  .cont {
    height: 500px;
  }
  .header {
    font-size: 40px;
  }
  .pizza {
    position: absolute;
    bottom: -100px;
    width: 300px;
    right: calc(50% - 150px);
  }
}
</style>