import woocommerce from "../../api/woocommerce";
import * as types from "../mutation-types";
import api from "../../api";

const scaleNums = (val, r1, r2) =>
    ((val - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
function random(min, max) {
  return Math.round(scaleNums(Math.random(), [0, 1], [min, max]));
}

// initial state
const state = {
  main: [
      "black"
  ],
  accent: [
      "neon_pink"
  ],
  sizes: [],
  combos: [],
  selected: {
    main: "",
    accent: "",
    pos: {}
  },
  loaded: false,
  hover: false
};

// getter - nagu methods??
const getters = {
  randomColors: function() {
    const mains = state.main;
    const accents = state.accent;
    const colors = {
      main: 0,
      accent: 0
    };
    while (colors.main === colors.accent) {
      colors.main = mains[random(0, mains.length - 1)];
      colors.accent = accents[random(0, accents.length - 1)];
    }
    return colors;
  },
  makeCombos: function() {
    const combos = [];
    for (let i = 0; i < state.main.length; i++) {
      for (let j = 0; j < state.accent.length; j++) {
        if (state.main[i] !== state.accent[j]) {
          combos.push({ main: state.main[i], accent: state.accent[j] });
        }
      }
    }
    console.log('just made', combos.length, 'combos !');
    return combos;
  },
  watchSelected: state => state.selected,
  productsLoaded: state => state.loaded,
  hoverHero: state => state.hover,
};
const mutations = {
  selectedColors: function(state, payload) {
    state.selected = payload;
  },
  selectedMain: function(state, payload) {
    state.selected.main = payload;
  },
  selectedAccent: function(state, payload) {
    state.selected.accent = payload;
  },
  selectedPos: function(state, payload) {
    state.selected.pos = payload;
  },
  getProducts: function(state, payload) {
    state.sizes = payload[2].options;
    state.main = payload[1].options;
    state.accent = payload[0].options;
    state.loaded = true;
    state.selected = getters.randomColors();
  },
  hoverHero: function (state, payload) {
    state.hover = payload
  }
};
const actions = {
  randomColors: function(context, payload) {
    context.commit("randomColors", payload);
  },
  selectedColors: function(context, payload) {
    context.commit("selectedColors", payload);
  },
  selectedMain: function(context, payload) {
    context.commit("selectedMain", payload);
  },
  selectedAccent: function(context, payload) {
    context.commit("selectedAccent", payload);
  },
  selectedPos: function(context, payload) {
    context.commit("selectedPos", payload);
  },
  hoverHero: function(context, payload) {
    context.commit("hoverHero", payload);
  },
  getProducts: function(context) {
    woocommerce.getProducts(products => {
      console.log('products from woo:', products);
      context.commit("getProducts", products[0].attributes);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
