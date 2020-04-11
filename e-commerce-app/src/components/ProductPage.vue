<template>
  <div class="ProductPage">
    <h3>{{product.title}}</h3>
    <b-row>
      <b-col cols="5">
        <img :src="selectedOption.image" class="product-image"/>
      </b-col>
      <b-col cols="7">
        <p>
        {{product.description}}
        </p>
        
        <p>
          Option selected: {{selectedOption.title}}
        </p>
        <p>
          Price: ${{selectedOption.price}}
        </p>

        
        <p>
          <b-button-group>
            <b-button v-for="option in product.options"
            :key="option.name"
            @click="changeOption(option)">
            {{option.title}}
            </b-button>
          </b-button-group>
        </p>
        <p>
          <b-alert v-if="this.qty>this.selectedOption.qty" show variant="warning"> There are not more than {{selectedOption.qty}} in the stock</b-alert>
          <b-input-group class="mt-1">
          <b-input-group-prepend>
            <b-button variant="info" v-on:click="remove">-</b-button>
          </b-input-group-prepend>
          <b-form-input v-model="qty"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" v-on:click="add">+</b-button>
            </b-input-group-append>
            </b-input-group>
            items in stock: {{selectedOption.qty}}
        </p>
        <p>
          Price: ${{selectedOption.price}}
        </p>

        <p>
          <b-button size="lg" variant="success"
          @click="addToCart"> Add To cart ${{this.qty*this.selectedOption.price}} </b-button>
    
        </p>
        <p>
          <b-alert :show="showConfirmation" variant="info">
          <h4 class="alert-heading">Well Done</h4>
          <p>You have successfull added this product to shopping cart.</p>
          <p><b-button to= "/cart"> Go to Checkout</b-button></p>
          </b-alert>
        </p>
      </b-col>
    </b-row> 
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProductPage',
  data: function(){
    return{
      product:{},
      selectedOption: {},
      qty:1,
      showConfirmation: false
    }
  },
  mounted() {
  axios
  .get("https://euas.person.ee/products/"+ this.$route.params.productId)
  .then(response =>{
    this.product=response.data;
    this.selectedOption=this.product.options[0];
  }).catch(error =>{
    console.log(error);
  })
  },
  methods: {
    changeOption: function (option){
      this.selectedOption=option;
    },
    add: function(){
      if(this.qty<this.selectedOption.qty){
      this.qty++;
    }},
    remove: function(){
      if(this.qty>1){
      this.qty--;
    }},
    addToCart: function(){
      if(!this.$root.$data.cart.items) this.$root.$data.cart.items=[]
      this.$root.$data.cart.items.push({
        productId:this.product.id,
        qty: this.qty,
        optionCode: this.selectedOption.code,
        optionImage:this.selectedOption.image,
        price: this.selectedOption.price,
        total: this.selectedOption.price *this.qty
    }
    )
    this.$root.$data.saveCart();
    this.showConfirmation=true;
    // this.$router.push('/cart')
  }
}
}
</script>
<style scoped>
.product-image{
  width: 300px;
  height:300px;
}
</style>