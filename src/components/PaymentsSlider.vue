<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      <div class="slider__item">
        <img src="../assets/visa.png" alt="payment-img">
      </div>
      
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
  name: 'PaymentsSlider',
  components: {
    VueSlickCarousel
    },
  data() {
    return {
      settings: {
        "infinite": true,
        "centerMode": false,
        "dots":false,
        "centerPadding": "0px",
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "variableWidth": true,
        "draggable":true,
        "swipe":true,
        "swipeToSlide":true,
        "arrows":true
      }
    }
  }
}
</script>

