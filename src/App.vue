<template>
  <h1>최상위 app 컴포넌트</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  /* 반응형 최대크기 */
  #app 
  { 
    margin:0 auto; 
    width:350px;
    height:650px;
    text-align:center; 
    background-color: #ffffff;
  }
  
  body
  {
    background-color: #000000dc;
  }


</style>
