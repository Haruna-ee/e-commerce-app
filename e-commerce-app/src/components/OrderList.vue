<template>
  <div class="orderListing">
<h3> List Of All Orders </h3>
   <table class="table text-light">
      <tr>
        <th>Order ID</th>
        <th>Items</th> 
        <th> Total Amount</th>
        <th>Actions</th>
      </tr>

       <tr  v-for="order in orders" :key="order.id">
            <td>{{order.id}}</td>
      
            <td>{{order.items && order.items.length}} items</td>
  
            <td>{{ orderAmount(order) }} </td>
            <td>
               <b-link :to="'/orderdetails/'+ order.id"> 
               <b-button  
               variant="primary">Order details </b-button>
              </b-link> 
            </td>
       </tr>
   </table>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'OrderList',
 data: function(){
    return{
      orders: {},
    }
  },
  mounted(){
      axios
        .get("https://euas.person.ee/user/orders/")
        .then(response => {
         this.orders=response.data;
  }).catch(error=> {
        console.log(error)
  });
},
methods: {
  orderAmount: function(order){
    let sum = 0
    for (const item of order.items){
      sum += item.total
    }
    return sum
  }
}
}
</script>
<style scoped>
</style>