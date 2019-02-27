import Vue from "vue/dist/vue.common.dev";
import App from "./app.vue";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(element);
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
