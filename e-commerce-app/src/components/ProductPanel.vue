
<template>
  <div class="productpanel">
    <h3>{{title}}</h3>
    {{categoryAlias}}
    <b-card-group deck>
      <productCard 
      :product="product" 
       v-for="product in products" 
      :key="product.id"/>

      </b-card-group>
  </div>
</template>

<script>
import productCard from './ProductCard.vue'
import axios from "axios";
export default {
  name: 'ProductPanel',
  props: {
    title: String,
    categoryAlias: String,
    section:String
  },
  components:{
    productCard
  },
  data(){
    return{
      products:[]
    };
  },
  mounted(){
    if(this.categoryAlias){
    axios
    .get("https://euas.person.ee/categories/"+this.categoryAlias+"/products")
    .then(response =>{
    this.products=response.data;
   
    
  });
  }
  else{
    axios
    .get("https://euas.person.ee/products/tags/"+this.section)
    .then(response =>{
    this.products=response.data;
  });
  }
  }
}
</script>

<style scoped>
.productpanel{
  margin-bottom: 15px;  
}
</style>