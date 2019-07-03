require("./bootstrap");
import "babel-polyfill";
import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import store from "./store";
import * as types from "./store/mutation-types";
import utils from "./utils";

// import "./assets/css/styles.css";
import "./assets/scss/_app.scss";

import Product from './components/partials/Product.vue'
import Main from './components/partials/Main.vue'
import MainColor from './components/partials/MainColor.vue'
import Accent from './components/partials/Accent.vue'
import AccentColor from './components/partials/AccentColor.vue'
import Combos from './components/partials/Combos.vue'
import Combo from './components/partials/Combo.vue'
import Brand from './components/partials/Brand.vue'
import BackgroundGraphics from "./components/partials/BackgroundGraphics.vue";

Vue.component('hProduct', Product);
Vue.component('hProductMain', Main);
Vue.component('hMainColor', MainColor);
Vue.component('hProductAccent', Accent);
Vue.component('hAccentColor', AccentColor);
Vue.component('hCombos', Combos);
Vue.component('hCombo', Combo);
Vue.component('hBrand', Brand);
Vue.component('hBackgroundGraphics', BackgroundGraphics);

new Vue({
  el: "#app",
  utils,
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch("getAllCategories");
    this.$store.dispatch("getAllPages");
  }
});
