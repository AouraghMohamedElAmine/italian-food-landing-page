<template>
  <div class="text-white lg:flex flex-row lg:px-20 pb-20">
    <div class="lg:w-3/6">
      <div>
        <div class="hidden lg:block">
          <img :src="logo" width="60" height="60" alt="logo" class="mx-2" />
          YOUR LOGO
        </div>
        <div class="header text-center lg:text-left">Italian Food</div>
      </div>

      <div class="text-center lg:text-left">
        <div class="lg:mt-16 lg:mb-12 mb-4 mt-6 text-2xl font-bold">
          LOROMIPSUM DOLOR
        </div>
        <div>
          <button
            class="
              mx-auto
              lg:mx-0
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
              lg:transform
              hover:bg-white
              px-2
              py-1
              rounded-xl
              font-bold
              text-xl
              w-40
            "
          >
            READ MORE
          </button>
        </div>
        <div class="lg:my-4 my-2 md:pr-16 md:px-0 px-4">
          Culpa eu minim Lorem cillum ipsum anim ipsum nostrud commodo ea
          cupidatat et Aliquip consequat nostrud laborum consectetur ea
          reprehenderit in nulla id non eu nisi.
        </div>
      </div>
    </div>

    <div
      class="hidden lg:block w-3/6 text-center relative"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div class="oneLeaf-shape" data-aos="fade-left" data-aos-duration="2000">
        <img :src="oneLeaf" alt="oneLeaf" />
      </div>
      <div
        class="secondLeaf-shape"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img :src="oneLeaf" alt="oneLeaf" width="150" height="150" />
      </div>
      <div
        class="thirdLeaf-shape"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img :src="oneLeaf" alt="oneLeaf" width="150" height="150" />
      </div>
      <div
        class="fourthLeaf-shape"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <img :src="oneLeaf" alt="oneLeaf" width="150" height="150" />
      </div>
      <div class="sauce-shape" data-aos="fade-up" data-aos-duration="2000">
        <img :src="sauce" alt="oneLeaf" height="300" width="300" />
      </div>

      <img class="pt-24 pb-10 pl-16" :src="heroPlate" alt="heroPlate" />
    </div>
  </div>
</template>

<script>
import logo from "../assets/img/logo.png";
import heroPlate from "../assets/img/heroPlate.png";
import oneLeaf from "../assets/img/oneLeaf.png";
import sauce from "../assets/img/SauceBong.png";

export default {
  data() {
    return {
      logo: logo,
      heroPlate: heroPlate,
      oneLeaf: oneLeaf,
      sauce: sauce,
    };
  },
};
</script>

<style scoped>
.header {
  font-family: "Vujahday Script", cursive;
  font-size: 120px;
}
@media only screen and (max-width: 600px) {
  .header {
    font-size: 60px;
  }
}

@media only screen and (max-width: 1285px) {
  .oneLeaf-shape {
    display: none;
  }
  .secondLeaf-shape {
    display: none;
  }
  .thirdLeaf-shape {
    display: none;
  }
  .fourthLeaf-shape {
    display: none;
  }
  .sauce-shape {
    display: none;
  }
}

.oneLeaf-shape {
  position: absolute;
  bottom: -30px;
  right: 30px;
}
.secondLeaf-shape {
  position: absolute;
  bottom: -80px;
  right: 200px;
}
.thirdLeaf-shape {
  position: absolute;
  bottom: -120px;
  transform: rotateZ(60);
  right: 300px;
}
.fourthLeaf-shape {
  position: absolute;
  top: 10px;
  right: 100px;
}
.sauce-shape {
  position: absolute;
  bottom: -60px;
  left: -130px;
}

.btn {
  background-color: #ebeced;
  color: rgb(25, 32, 32);
}
/* .oneLeaf-shape {
  position: absolute;
  bottom: -30px;
  right: 30px;
}
.secondLeaf-shape {
  position: absolute;
  bottom: -80px;
  right: 200px;
}
.thirdLeaf-shape {
  position: absolute;
  bottom: -120px;
  transform: rotateZ(60);
  right: 300px;
}
.fourthLeaf-shape {
  position: absolute;
  top: 10px;
  right: 100px;
}
.sauce-shape {
  position: absolute;
  bottom: -60px;
  left: -130px;
} */
</style>