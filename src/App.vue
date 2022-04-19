<template>
  <div id="app">
    <div class="first-section">
      <NavBar />
      <HeroSection />
    </div>
    <div class="plates-section">
      <PlatesSection />
    </div>
    <div class="info-section">
      <InfoSection />
    </div>
    <div class="discounts-section">
      <DiscountsSection />
    </div>
    <div class="pizza-section">
      <PizzaSection />
    </div>
    <div class="pizzaTypes-section">
      <PizzaTypes />
    </div>
    <div class="newsTeller-section">
      <NewsTellerSection />
    </div>
    <div class="footer-section">
      <FooterSection />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import PlatesSection from "./components/PlatesSection.vue";
import InfoSection from "./components/InfoSection.vue";
import DiscountsSection from "./components/DiscountsSection.vue";
import PizzaSection from "./components/PizzaSection.vue";
import PizzaTypes from "./components/PizzaTypes.vue";
import NewsTellerSection from "./components/NewsTellerSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
    HeroSection: HeroSection,
    PlatesSection: PlatesSection,
    InfoSection: InfoSection,
    DiscountsSection: DiscountsSection,
    PizzaSection: PizzaSection,
    PizzaTypes: PizzaTypes,
    NewsTellerSection: NewsTellerSection,
    FooterSection: FooterSection,
  },
};
</script>

<style>
#app {
  font-family: "Akshar", sans-serif;
  letter-spacing: 0.7mm;
}
.first-section {
  background-image: url("/src/assets/img/bg.jpg");
}
.pizza-section {
  background-image: url("/src/assets/img/bg.jpg");
}
</style>
