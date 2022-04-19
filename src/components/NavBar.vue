<template>
  <nav id="navBar" class="nav-bar flex sticky md:px-20">
    <ul class="hidden lg:flex lg:flex-row w-5/12"></ul>
    <ul
      class="
        hidden
        lg:flex lg:flex-row
        text-white
        items-center
        justify-between
        py-12
        font-semibold
        w-7/12
      "
    >
      <li class=""><a href="#">HOME</a></li>

      <li class="">
        <a href="#">MENU</a>
      </li>

      <li class="">
        <a href="#">OUR STORY</a>
      </li>

      <li class="">
        <a href="#">CONTACT US</a>
      </li>

      <li>
        <div class="search">
          <input class="search-txt" type="text" name="" />
          <a class="search-btn" href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </li>
    </ul>

    <div class="lg:hidden text-white px-10 my-10 z-40">
      <Slide class="text-white" style="color: white">
        <a class="text-white" id="home" href="#">
          <span>HOME</span>
        </a>
        <a class="text-white" id="home" href="#">
          <span>MENU</span>
        </a>
        <a class="text-white" id="home" href="#">
          <span>OUR STORY</span>
        </a>
        <a class="text-white" id="home" href="#">
          <span>CONTACT US</span>
        </a>
      </Slide>
    </div>
  </nav>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "NavBar",
  components: {
    Slide,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  background: white;
  height: 40px;
  border-radius: 40px;
  padding: 0 10px;
}
.bm-burger-bars {
  background-color: white;
}
.search:hover > .search-txt {
  width: 130px;
  padding: 0 10px;
  color: black;
}
.search:hover > .search-btn {
  background: white;
}
.search-btn {
  color: black;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: wheat;
  font-size: 16px;
  transition: ease-in 0.4s;
  line-height: 40px;
  width: 110px;
}
.fas fa-search {
  font-weight: 200;
  font-size: 40px;
}
</style>
