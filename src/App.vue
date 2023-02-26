<template>
  <div class="page" id="app">
    <HeaderBlock>
    </HeaderBlock>
    <main>
      <MainBlock></MainBlock>
      <infoBlock></infoBlock>
      <PartnersBlock></PartnersBlock>
      <WhatWeDo></WhatWeDo>
      <PaymentMethods></PaymentMethods>
    </main>
    <FooterBlock></FooterBlock>
  </div>

</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
import MainBlock from './components/MainBlock.vue'
import InfoBlock from './components/InfoBlock.vue'
import PartnersBlock from './components/PartnersBlock.vue'
import WhatWeDo from './components/WhatWeDo.vue'
import PaymentMethods from './components/PaymentMethods.vue'
import FooterBlock from './components/FooterBlock.vue'
//import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    InfoBlock,
    PartnersBlock,
    WhatWeDo,
    PaymentMethods,
    FooterBlock,
  }

}

</script>
