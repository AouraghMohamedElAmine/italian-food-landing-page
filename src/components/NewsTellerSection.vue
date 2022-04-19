<template>
  <div class="bg-gray text-white text-center py-32 md:px-20 relative">
    <h1 class="text-5xl">Title Here</h1>
    <p class="my-10 px-5">
      Veniam sint non do laboris nostrud qui elit non do laboris nostrud
      quifugiat.
    </p>
    <div>
      <input
        placeholder="Your email"
        class="rounded-3xl p-2 text-gray outline-0 px-4 w-3/6 md:w-2/6"
        type="text"
        name=""
        id=""
      />
      <button class="subscribe font-bold p-2 px-4 md:px-10 rounded-3xl">
        SUBSCRIBE
      </button>
    </div>

    <img :src="leafs" class="leafs hidden lg:block" />
    <img :src="threeLeafs" class="threeLeafs hidden lg:block" />
  </div>
</template>

<script>
import leafs from "../assets/img/manyLeafs.png";
import threeLeafs from "../assets/img/threeLeafs.png";

export default {
  data() {
    return {
      leafs: leafs,
      threeLeafs: threeLeafs,
    };
  },
};
</script>

<style scoped>
.subscribe {
  background-color: rgb(66, 66, 66);
  transform: translateX(-40px);
}
@media screen and (max-width: 600px) {
  .subscribe {
    transform: translateX(-20px);
  }
}
.threeLeafs {
  height: 200px;
  width: 80px;
  position: absolute;
  left: 80px;
  bottom: -40px;
  z-index: 10;
}
.leafs {
  height: 200px;
  width: 80px;
  position: absolute;
  right: 80px;
  top: -40px;
  z-index: 10;
}
</style>