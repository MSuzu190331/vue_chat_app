<template>
  <div class="footer">
    <div class="icons">
      <i class="fas fa-plus"></i>
      <i class="fas fa-camera"></i>
      <i class="far fa-image"></i>
      <i class="far fa-smile"></i>
      <i class="fas fa-microphone"></i>
    </div>
    <div class="message-form">
      <input name= "input-form" v-model="inputText"/>
      <button v-on:click="startSpeech">{{ recognitionText }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        inputText: '',
        recognition : new window.webkitSpeechRecognition(),
        recognitionText: '音声入力開始',
      }
    },
    methods: {
      startSpeech: function() {
        this.recognition.start()
      }
    },
    created: function() {
      this.recognition.onstart = () => {
        this.recognitionText = '音声入力中...'
      }
      this.recognition.onend = () => {
        this.recognitionText = '音声入力開始'
      }
      this.recognition.onresult = (event) => {
        if (event.results.length > 0) {
          this.inputText = event.results[0][0].transcript;
          this.$emit('inputText', this.inputText);
        }
      }
    }
  }
</script>

<style scope>
  .footer {
    height: 50px;
    width: 100%;
    background-color: #C0C0C0;
  }

  .icons{
    height: 50px;
    display: inline-block; 
  }

  .fas,.far{
    margin: 5px;
    height: 30px;
    width: 30px;
    font-size: 25px;
  }

  .message-form {
    display: inline-block; 
    width: 40%;
  }
  
  input.input-form {
    height: 30px;
    width: 100%;
    margin: 5px;
  }

</style>