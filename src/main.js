import Vue from "vue/dist/vue.common.dev";
console.log("vue", Vue);
import App from "./app.vue";
var vue = new Vue({
  el: "#app",
  data() {
    return {
      test: "xxx"
    };
  },
  components: { App },
  template: "<App/>"
});
