require("./bootstrap");
import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import store from "./store";
import * as types from "./store/mutation-types";

// import "./assets/css/styles.css";
import "./assets/scss/_app.scss";

import Product from './components/partials/Product.vue'
import Main from './components/partials/Main.vue'
import MainColor from './components/partials/MainColor.vue'
import Accent from './components/partials/Accent.vue'
import AccentColor from './components/partials/AccentColor.vue'
import Dots from './components/partials/Dots.vue'
import Dot from './components/partials/Dot.vue'
import Combos from './components/partials/Combos.vue'
import Combo from './components/partials/Combo.vue'

Vue.component('Product', Product);
Vue.component('Main', Main);
Vue.component('MainColor', MainColor);
Vue.component('Accent', Accent);
Vue.component('AccentColor', AccentColor);
Vue.component('Dot', Dot);
Vue.component('Dots', Dots);
Vue.component('Combos', Combos);
Vue.component('Combo', Combo);

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch("getAllCategories");
    this.$store.dispatch("getAllPages");
  }
});
