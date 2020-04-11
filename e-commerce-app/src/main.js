import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import CategoryPage from './components/CategoryPage.vue'
import ProductPage from './components/ProductPage.vue'
import ShoppingCart from "./components/ShoppingCart"
import OrderList from "./components/OrderList"
import OrderDetails from "./components/OrderDetails"
import axios from "axios"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/categories/:categoryAlias', component: CategoryPage },
    { path: '/products/:productId', component: ProductPage },
    {path: '/cart' , component: ShoppingCart},
    {path: '/orderlist' , component: OrderList},
    {path: '/orderdetails/:orderId', component: OrderDetails},
  ],
  mode: 'history'
});

axios.defaults.headers.common['Authorization']
= 'Bearer harunamuazang1994@gmail.com';


if(localStorage.cartId){
  axios.get("https://euas.person.ee/user/carts/" + localStorage.cartId).then(response=>{
   localStorage.cartId=response.data.id
  new Vue({
  render: h => h(App),
  router: router,
  data:{
    cart: response.data,
    saveCart(){
      axios.put("https://euas.person.ee/user/carts/"
      + this.cart.id, this.cart)
    }, 
    reinitCart(){
    axios.post("https://euas.person.ee/user/carts").then(response=>{
   localStorage.cartId=response.data.id
   this.cart=response.data;
    });
  }
}
  }).$mount('#app')

}
);
}else{
  axios.post("https://euas.person.ee/user/carts").then(response=>{
   localStorage.cartId=response.data.id
  new Vue({
  render: h => h(App),
  router: router,
  data:{
    cart: response.data,
    saveCart(){
      axios.put("https://euas.person.ee/user/carts/"
      + this.cart.id, this.cart)
    }, 
    reinitCart(){
      axios.post("https://euas.person.ee/user/carts").then(response=>{
     localStorage.cartId=response.data.id
     this.cart=response.data;
      })
    }
  }
}).$mount('#app')
}
);
}