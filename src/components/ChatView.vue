<template>
  <div>
    <Header/>
    <MainPage v-bind:chatText='chatText'/>
    <Footer @inputText='inputText'/>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import MainPage from '../components/MainPage.vue'
  import Footer from '../components/Footer.vue'
  import '../reset.css'

  export default {
    name: 'ChatView',
    data() {
      return {
        chatText: ''
      }
    },
    components: {
      Header,
      MainPage,
      Footer
    },
    methods: {
      inputText: function(inputText) {
        this.chatText=inputText;
      }
    }
  }
</script>

<style>

</style>
