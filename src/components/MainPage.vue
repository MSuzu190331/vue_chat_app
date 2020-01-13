<template>
  <div class="main-page">
    <h2>{{ chatText }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
    props: {
      chatText: { 
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .main-page {
    background-color: #6699CC;
    height: 85vh;
  }
</style>
