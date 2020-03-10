<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="12">
          <Header/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <CategoriesMenu/>
        </b-col>
        <b-col cols="9">
          <MainPage/>          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CategoriesMenu from './components/CategoriesMenu.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    CategoriesMenu,
    MainPage,
  }
}
</script>

<style>
#app {
}
</style>
