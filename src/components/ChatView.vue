<template>
  <div>
    <Header/>
    <MainPage/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import MainPage from '../components/MainPage.vue'
  import Footer from '../components/Footer.vue'
  import '../reset.css'

  export default {
    name: 'ChatView',
    components: {
      Header,
      MainPage,
      Footer
    }
  }
</script>

<style>

</style>
