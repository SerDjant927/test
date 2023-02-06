<template>
  <div class="page" id="app">
    <HeaderBlock></HeaderBlock>
    <main>
      <MainBlock></MainBlock>
      <infoBlock></infoBlock>
    </main>
  </div>

</template>

<script>

import HeaderBlock from './components/HeaderBlock.vue'
import MainBlock from './components/MainBlock.vue'
import InfoBlock from './components/InfoBlock.vue'
export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock,
    InfoBlock,
  }
}
</script>
