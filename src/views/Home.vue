<template>
  <div class="home">
    <span>在main.js中添加如下代码</span>
    <pre>Vue.prototype.myName="陌上寒"</pre>
    <span style="font-weight:bold">输出：{{myName}}</span>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    // console.log(abc);
    // window.abc = "234";
    // console.log(this.__proto__.a=2);
    // console.log(this);
    // console.log(this.myName); //陌上寒
    console.log(this.$root.website);
    this.$root.website="陌上寒个人博客"
    // this.myName = "陌二哥";
  }
};
</script>
