<template>
  <div class="md:px-20 text-gray px-5">
    <h1 class="text-center py-8 header">Occaecat Ullamco Alquip</h1>
    <p class="text-center md:text-xl px-8 md:px-24 my-4">
      i Magna eu qui dolor qui. Qui eiusmod amet irure est occaecat pariatur ut
      Aliqua irure consectetur cillum ullamco nisi eu.
    </p>

    <div class="lg:flex hidden flex-row justify-between my-10">
      <div class="w-1/3">
        <img class="md:w-96 md:h-96 w-full h-full" :src="plate1" />
        <div class="py-10 px-10">
          <h1 class="font-bold md:text-3xl my-4">Cupidatat sunt</h1>
          <p c>Minim in consequat culpa incididunt nisi al fieo fuue .</p>
        </div>
      </div>
      <div class="w-1/3">
        <img class="md:w-96 md:h-96 w-full h-full" :src="plate2" />
        <div class="py-10 px-10">
          <h1 class="font-bold md:text-3xl my-4">Laboris</h1>
          <p>
            Reprehenderit culpa dolore sit ut aute sunt est labo fieo fuue .
          </p>
        </div>
      </div>
      <div class="w-1/3">
        <img class="md:w-96 md:h-96 w-full h-full" :src="plate3" />
        <div class="py-10 px-10">
          <h1 class="font-bold md:text-3xl my-4">Reprehenderit do</h1>
          <p>Et e fieo fuue it ut aute sunt est labo .</p>
        </div>
      </div>
    </div>

    <!--carousel for smaller devices  -->
    <div class="lg:hidden block">
      <carousel>
        <slide
          ><div class="">
            <img class="w-full h-full" :src="plate1" />
            <div class="py-5 px-5">
              <h1 class="font-bold md:text-3xl my-4">Cupidatat sunt</h1>
              <p c>Minim in consequat culpa incididunt nisi al fieo fuue .</p>
            </div>
          </div>
        </slide>
        <slide
          ><div class="">
            <img class="w-full h-full" :src="plate2" />
            <div class="py-5 px-5">
              <h1 class="font-bold md:text-3xl my-4">Laboris</h1>
              <p c>
                Reprehenderit culpa dolore sit ut aute sunt est labo fieo fuue .
              </p>
            </div>
          </div>
        </slide>
        <slide
          ><div class="">
            <img class="w-full h-full" :src="plate3" />
            <div class="py-5 px-5">
              <h1 class="font-bold md:text-3xl my-4">Cupidatat sunt</h1>
              <p c>Minim in consequat culpa incididunt nisi al fieo fuue .</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <button
      class="
        btn
        rounded-3xl
        flex flex-row
        justify-center
        items-center
        cursor-pointer
        transition
        duration-500
        ease-out
        hover:scale-110
        transform
        hover:text-white
        transform
        text-white
        px-6
        py-1
        rounded-lg
        font-bold
        text-xl
        w-40
        mx-auto
      "
    >
      SHOW MORE
    </button>
  </div>
</template>

<script>
import plate1 from "../assets/img/plate1.png";
import plate2 from "../assets/img/plate2.png";
import plate3 from "../assets/img/plate3.png";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "PlatesSection",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      plate1: plate1,
      plate2: plate2,
      plate3: plate3,
    };
  },
};
</script>

<style scoped>
.header {
  font-family: "Vujahday Script", cursive;
  font-size: 96px;
}
@media only screen and (max-width: 600px) {
  .header {
    font-size: 40px;
  }
}

.btn {
  background-color: rgb(25, 32, 32);
  color: white;
  height: 60px;
  margin-bottom: 30px;
}
</style>