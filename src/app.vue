<template>
  <div>
    <div id="test">
      <p>{{test}}</p>
    </div>
    <div id="test2">
      <p>xxxy</p>
    </div>
    <div id="test3"></div>
    <el-button>test</el-button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      test: "just test 123 4 5"
    };
  }
};
</script>
<style lang="scss"  scoped>
@import "./styles/app1.scss";
@import url("./styles/app.css");
#test2 p {
  color: green;
}
#test3 {
  width: 300px;
  height: 300px;
  background: blue;
}
</style>

