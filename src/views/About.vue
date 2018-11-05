<template>
  <div class="about">
    <span>在main.js中添加如下代码</span>
    <pre>Vue.prototype.myName="陌上寒"</pre>
    <p>在Home中对myName进行赋值“陌二哥”，我们观察其输出</p>
    <br>
    <span style="font-weight:bold">输出：{{myName}}</span>
    <br>

    <p>myName依然是在main.js中赋值的“陌上寒”，在Home中赋值并没有生效</p>
    <p>{{String('123')}}</p>
    <p>{{Array()}}</p>
  </div>
</template>
<script>
export default {
  created(){
    // console.log(window.abc);
    // console.log(this.myName); //陌上寒
    console.log(this.$root.website);
  }
}
</script>


