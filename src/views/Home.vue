<template>
  <div class="home">
    <span>在main.js中添加如下代码</span>
    <pre>Vue.prototype.myName="陌上寒"</pre>
    <span style="font-weight:bold">输出：{{myName}}</span>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // }
  created(){
    this.myName="陌二哥"
  }
}
</script>
