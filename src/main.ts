import Vue from "vue";
import App from "./App.vue";
import Fragment from "vue-fragment";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdiSvg',
    },
  }),
  render: h => h(App),
}).$mount("#app");
