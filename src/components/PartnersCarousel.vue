<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      <a href="#" class="slider__item slider__item_partners">
        <img src="../assets/partners.png" alt="slider-img">
        <img src="../assets/partners_light.svg" alt="slider-img">
      </a>
      
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.common.js'

export default {
  name: 'MyComponent',
  components: {
    VueSlickCarousel
    },
  data() {
    return {
      settings: {
        "infinite": true,
        "centerMode": false,
        "centerPadding": "0px",
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "variableWidth": true,
        "draggable":true,
        "swipe":true,
        "swipeToSlide":true,

      }
    }
  }
}
</script>

