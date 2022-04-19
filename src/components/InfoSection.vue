<template>
  <div class="bg-gray text-white md:px-20 pb-10 px-5">
    <h1 class="header text-center py-8">Occaecat Ullamco Alquip</h1>
    <div class="md:flex flex-row justify-evenly">
      <div class="md:w-5/12 text-center md:text-left">
        Cillum et Lorem anim qui magna voluptate velit cillum adipisicing
        consequat occaecat laborum nulla quis. Officia ullamco ad laborum
        eiusmod do.
      </div>
      <div class="md:w-5/12 text-center md:text-left md:my-0 mt-8">
        Ut dolore nulla amet aliqua aliquip aliqua aliquip ullamco reprehenderit
        ex exercitation exercitation excepteur proident. Culpa ex eiusmod amet
        et mollit aute excepteur Lorem laborum sunt. Incididunt Lorem proident
        voluptate consectetur.
      </div>
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
        text-white
        px-6
        py-1
        rounded-lg
        font-bold
        text-xl
        w-40
        mx-auto
        mb-16
      "
    >
      SHOW MORE
    </button>
  </div>
</template>

<script>
export default {};
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
  background-color: white;
  color: rgb(25, 32, 32);
  height: 60px;
  margin-top: 30px;
}
</style>