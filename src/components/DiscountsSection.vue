<template>
  <div class="md:px-20 py-10 md:text-left text-center">
    <!--Desktop view -->
    <div
      class="md:flex flex-row justify-evenly items-center px-10"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="md:w-5/12 hidden md:block"><img :src="plate2" /></div>
      <div class="md:w-5/12">
        <div>
          <h1 class="md:text-6xl text-4xl font-bold">
            Discount up to 50% All Excursions
          </h1>
          <p class="text-xl my-6">
            Consectetur sunt in commodo consectetur adipisicing diep dizr
            commodo consectetur adipisicing diep dizr.
          </p>
          <button
            class="
              md:mx-0
              mx-auto
              btn
              rounded-3xl
              flex flex-row
              justify-center
              items-center
              cursor-pointer
              transition
              duration-500
              ease-out
              hover:scale-110 hover:text-white
              transform
              text-white
              px-6
              py-1
              rounded-lg
              font-bold
              text-xl
              w-40
            "
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>

    <div
      class="md:flex flex-row justify-evenly items-center px-10"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div class="md:w-5/12">
        <div>
          <h1 class="md:text-6xl text-4xl font-bold">
            Junuary's 1st Promo: Buy 1 Get 1 Free !
          </h1>
          <p class="text-xl my-6">
            Consectetur sunt in commodo consectetur adipisicing diep dizr
            commodo consectetur adipisicing diep dizr.
          </p>
          <button
            class="
              btn
              md:mx-0
              mx-auto
              rounded-3xl
              flex flex-row
              justify-center
              items-center
              cursor-pointer
              transition
              duration-500
              ease-out
              hover:scale-110 hover:text-white
              transform
              text-white
              px-6
              py-1
              rounded-lg
              font-bold
              text-xl
              w-40
            "
          >
            READ MORE
          </button>
        </div>
      </div>
      <div class="md:w-5/12 hidden md:block"><img :src="plate3" /></div>
    </div>

    <!--Mobile view -->
    <!-- <div class="lg:hidden block">
      <carousel>
        <slide>
          <div>
            <h1 class="text-3xl font-bold">
              Discount up to 50% All Excursions
            </h1>
            <p class="text-xl my-2">
              Consectetur sunt in commodo consectetur adipisicing diep dizr
              commodo consectetur adipisicing diep dizr.
            </p>
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
                hover:scale-110 hover:text-white
                transform
                text-white
                px-6
                py-1
                rounded-lg
                font-bold
                text-xl
                w-40
              "
            >
              READ MORE
            </button>
          </div>
        </slide>

        <slide> </slide>
      </carousel>
    </div> -->

    <!-- end Mobile view -->
  </div>
</template>

<script>
import plate2 from "../assets/img/plate2.png";
import plate3 from "../assets/img/plate3.png";

export default {
  name: "DiscountsSection",

  data() {
    return {
      plate2: plate2,
      plate3: plate3,
    };
  },
};
</script>

<style>
.btn {
  background-color: rgb(25, 32, 32);
  color: white;
  height: 55px;
  margin-bottom: 30px;
}
</style>