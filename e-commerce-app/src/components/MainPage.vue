<template>
  <div class="main-page">
    Main page from component
    <ProductPanel title="Best offers"/>
    <ProductPanel title="Latest arrivals"/>
    <ProductPanel title="Sale"/>
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
