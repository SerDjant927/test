<template>
  <div class="container container_payment">
    <div class="payment">
      <h2 class="payment__headline global-title">Payment methods</h2>
      <div class="slider payment__slider">
        <div class="slider__navs">
          <a href="javascript:void(0);" class="slider__arrow arrow-prev">
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.16" fill-rule="evenodd" clip-rule="evenodd" d="M11.1426 23.5227L0.490259 13.1523C-0.16342 12.5159 -0.16342 11.4841 0.490259 10.8477L11.1426 0.477287C11.7962 -0.159096 12.8561 -0.159096 13.5097 0.477287C14.1634 1.11367 14.1634 2.14545 13.5097 2.78183L4.04103 12L13.5097 21.2182C14.1634 21.8546 14.1634 22.8863 13.5097 23.5227C12.8561 24.1591 11.7962 24.1591 11.1426 23.5227Z" fill="#1D253C"/>
            </svg>
          </a>
          <a href="javascript:void(0);" class="slider__arrow arrow-next">
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.16" fill-rule="evenodd" clip-rule="evenodd" d="M2.85744 23.5227L13.5097 13.1523C14.1634 12.5159 14.1634 11.4841 13.5097 10.8477L2.85744 0.477287C2.20376 -0.159096 1.14394 -0.159096 0.490259 0.477287C-0.16342 1.11367 -0.16342 2.14545 0.490259 2.78183L9.95897 12L0.490259 21.2182C-0.16342 21.8546 -0.16342 22.8863 0.490259 23.5227C1.14394 24.1591 2.20376 24.1591 2.85744 23.5227Z" fill="#1D253C"/>
            </svg>
          </a>
        </div>
        <div class="slider__list slider__list_payments">
          <PaymentsSlider></PaymentsSlider>
        </div>
      </div>
    </div>
    <div class="dividing-block">
      <div class="dividing-block__line"></div>
      <div class="dividing-block__img"></div>
    </div>
    <HiddingText></HiddingText>
  </div>
</template>

<script>
import HiddingText from "@/components/HiddingText.vue"
import PaymentsSlider from "@/components/PaymentsSlider.vue";
export default {
  name: 'PaymentMethods',
  components:{
    PaymentsSlider,
    HiddingText
  }

}


</script>
