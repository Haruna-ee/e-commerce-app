<template>
  <div class="main-page">
   
    <ProductPanel title="Best offers" section="recommended"/>
    <ProductPanel title="Latest arrivals" section="buynow"/>
    <ProductPanel title="Sale" section="topselling"/>
  </div>
</template>

<script>
import ProductPanel from './ProductPanel.vue'

export default {
  name: 'MainPage',
  components: {
    ProductPanel
  }
}
</script>

<style scoped>
</style>
