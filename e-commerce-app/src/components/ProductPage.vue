<template>
  <div class="category-page">
    <h3>{{product.title}}</h3>
    <b-row>
      <b-col cols="5">
        <img :src="product.image" class="product-image"/>
      </b-col>
      <b-col cols="7">
        <p>
        {{product.description}}
        </p>
        
        <p>
          Option selected: {{defaultOption.title}}
        </p>

        <p>
          Price: ${{defaultOption.price}}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ProductPage',
  data: function() {
    return {
      product: {},
      defaultOption: {}
    }
  },
  mounted() {
    axios
      .get("https://euas.person.ee/products/" + this.$route.params.productId)
      .then(response => {
        this.product = response.data;
        this.defaultOption = this.product.options[0];
      });
  }
}
</script>

<style scoped>
.product-image {
  width: 300px;
}
</style>
