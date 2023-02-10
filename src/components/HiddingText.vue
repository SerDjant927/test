<template>
  <div class="more-info-block">
    Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants!
    Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.
    <br/>
    <br/>
    But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center.
    <transition name="fade">
      <span class="show-text" v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex in quam. Ad atque eius quos?</span>
    </transition>
    <a @click="show = !show"  href="javascript:void(0);" class="etc-btn">
      <div class="etc-btn__dot"></div>
      <div class="etc-btn__dot"></div>
      <div class="etc-btn__dot"></div>
    </a>

  </div>
</template>



<script>
export default {
  data() {
    return {
      show: false,
    }
  },

};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>