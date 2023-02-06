<template>
  <div class="page" id="app">
    <HeaderBlock></HeaderBlock>
    <main>
      <MainBlock></MainBlock>
    </main>
  </div>

</template>

<script>

import HeaderBlock from './components/HeaderBlock.vue'
import MainBlock from './components/MainBlock.vue'
export default {
  name: 'App',
  components: {
    HeaderBlock,
    MainBlock
  }
}
</script>
