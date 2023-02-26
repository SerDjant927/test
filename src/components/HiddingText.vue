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
    <div @click="show = !show"  class="etc-btn">
      <div class="etc-btn__dot"></div>
      <div class="etc-btn__dot"></div>
      <div class="etc-btn__dot"></div>
    </div>

  </div>
</template>
<style lang="less">
.dividing-block{
  padding: 82px 0 106px;
  height: 32px;
  display: flex;
  width: 100vw;
  position: relative;
  &__img{
    position: absolute;
    top: -7px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: url("../assets/divine-bg.svg");
    background-color: #fff;
    z-index: 2;
    background-repeat: no-repeat;
    background-position: center center;
    height: 28px;
    width: 100px;
  }
  &__line{
    height: 2px;
    width: 100vw;
    background-color: #C2D2F4;
  }
}
.more-info-block{
  color: #666;
  font-family: 'Intro Book', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
}
.etc-btn{
  display: inline-flex;
  background-color: #CCDBFC;
  align-items: center;
  justify-content: center;
  column-gap: 2px;
  width: 25px;
  height: 15px;
  border-radius: 4px;
  position: relative;
  top: -2px;
  left: 4px;
  cursor: pointer;
  &__dot{
    height: 5px;
    width: 5px;
    background-color: #fff;
    border-radius: 100%;
  }
}


.more-info-block .show-text~.etc-btn{
  position: absolute;
  top:unset;
  bottom: -20px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
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