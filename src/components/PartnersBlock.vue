<template>
  <div class="container container_partners">
    <div class="partners">
      <div class="partners__top">
        <h2 class="partners__headline global-title">Our Partners</h2>
        <div class="partners__btn partners__btn_desc">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11H6V10L0 8.5V14.2633C0 15.224 0.751579 16 1.68211 16H15.3179C16.2484 16 17 15.224 17 14.2633V8.5L11 10V11Z" fill="#FD466E"/>
            <path d="M15.3179 2.99996H12V2.37825C12 0.934501 11.3779 0 10 0H7C5.6221 0 5 0.934539 5 2.37829V3H1.68669C0.756159 3 0.00458002 3.7875 0.00458002 4.7625L0 7L6 8.5V7H11V8.5L17 7V4.74371C17 3.78746 16.2484 2.99996 15.3179 2.99996ZM6 2.60526C6 2.13158 6.52778 2 7 2H10C10.4722 2 11 2.13158 11 2.60526V3L6 3V2.60526Z" fill="#FD466E"/>
            <path d="M10 8H7V10H10V8Z" fill="#FD466E"/>
          </svg>
          <span>Let's collaborate</span>
        </div>
      </div>

      <div class="slider-container">
        <TestCarousel></TestCarousel>
      </div>

      <div class="partners__btn partners__btn_mob">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 11H6V10L0 8.5V14.2633C0 15.224 0.751579 16 1.68211 16H15.3179C16.2484 16 17 15.224 17 14.2633V8.5L11 10V11Z" fill="#FD466E"/>
          <path d="M15.3179 2.99996H12V2.37825C12 0.934501 11.3779 0 10 0H7C5.6221 0 5 0.934539 5 2.37829V3H1.68669C0.756159 3 0.00458002 3.7875 0.00458002 4.7625L0 7L6 8.5V7H11V8.5L17 7V4.74371C17 3.78746 16.2484 2.99996 15.3179 2.99996ZM6 2.60526C6 2.13158 6.52778 2 7 2H10C10.4722 2 11 2.13158 11 2.60526V3L6 3V2.60526Z" fill="#FD466E"/>
          <path d="M10 8H7V10H10V8Z" fill="#FD466E"/>
        </svg>
        <span>Let's collaborate</span>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.partners{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__top{
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }
  &__main{
    margin-top: 80px;
    width: 100%;
  }
  &__headline{
    margin-left: auto;
    margin-right: auto;
  }
  &__btn{
    cursor: pointer;
    position: absolute;
    right: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 9px;
    font-family: 'Intro Book', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #1D253C;
    border: 1px solid #dde7fd;
    border-radius: 24px;
    padding: 8px 16px;
    &_mob{
      display: none;
    }
  }
  .slider__item{
    img{
      position: relative;
      &:nth-child(2){
        display: none;
      }
      &:hover{
        img:nth-child(1){
          display: none;
        }
        img:nth-child(2){
          display: block;
          z-index: 2;
        }
      }
    }
  }
  .slider__item_partners{
    width: 188px;
    height: 56px;
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .slider-container{
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    margin: 74px 0 34px;
    .slick-slide{
      width: 188px;
      margin-right: 20px;
    }
  }
}

.partners-slider__item:hover{
  img{
    &:nth-child(2){
      display: block;
    }
    &:nth-child(1){
      display: none;
    }
  }
}
.partners-slider{
  .slider__list{
    display: flex;
    flex-wrap: nowrap;
    //width: max-content;
    column-gap: 88px;
  }
}
@media(max-width: 375px){
  .partners{
    &__btn{
      &_desc{
        display: none;
      }
      &_mob{
        position: static;
        display: flex;
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
<script>
import TestCarousel from "@/components/PartnersCarousel.vue";

export default {
  name: 'PartnersBlock',
  components:{
    TestCarousel,
  }

}
</script>

