<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
      <div class="slider__item slider__item_video">
        <img src="../assets/slider-video.png" alt="slider-img">
        <img src="../assets/play-btn.svg" alt="play-btn" class="play-btn">
      </div>
      <div class="slider__item slider__item_video">
        <img src="../assets/slider-video.png" alt="slider-img">
        <img src="../assets/play-btn.svg" alt="play-btn" class="play-btn">
      </div>
      <div class="slider__item slider__item_video">
        <img src="../assets/slider-video.png" alt="slider-img">
        <img src="../assets/play-btn.svg" alt="play-btn" class="play-btn">
      </div>
      <div class="slider__item slider__item_video">
        <img src="../assets/slider-video.png" alt="slider-img">
        <img src="../assets/play-btn.svg" alt="play-btn" class="play-btn">
      </div>
      <a  class="slider__item slider__item_video">
        <img src="../assets/slider-video.png" alt="slider-img">
        <img src="../assets/play-btn.svg" alt="play-btn" class="play-btn">
      </a>
      
    </VueSlickCarousel>
  </div>
</template>
<style scoped>
.slider__item_video{
  cursor: pointer;
}
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.common.js'

export default {
  name: 'VideoCarousel',
  components: {
    VueSlickCarousel
    },
  data() {
    return {
      settings: {
        "infinite": false,
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

