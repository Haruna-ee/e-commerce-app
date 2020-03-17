<template>
  <div class="product-panel">
    <h3>{{ title }}</h3>
    {{categoryAlias}}
    <b-card-group deck>
      <ProductCard
        :product="product"
        v-for="product in products"
        :key="product.id"/>
    </b-card-group>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import axios from "axios";

export default {
  name: 'ProductPanel',
  props: {
    title: String,
    categoryAlias: String,
  },
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios
      .get("https://euas.person.ee/categories/" + this.categoryAlias + "/products")
      .then(response => {
        this.products = response.data;
      });
  }
}
</script>

<style scoped>
.product-panel {
  border: 1px solid red;
  margin-bottom: 15px;
}
</style>
