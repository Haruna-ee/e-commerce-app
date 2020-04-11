<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="12">
          <Header/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2" class="mt-3">
          <CategoriesMenu/>
        </b-col>
        <b-col cols="10" class="mt-3">
          <router-view :key="$route.fullPath"></router-view>      
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CategoriesMenu from './components/CategoriesMenu.vue'

export default {
  name: 'App',
  components: {
    Header,
    CategoriesMenu,
  }
}
</script>

<style>
#app {
  background-color: black;
  height: 100vmax;
  color: #ffffff
}
</style>
