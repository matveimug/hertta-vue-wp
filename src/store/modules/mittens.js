
const scaleNums = (val, r1, r2) =>
    ((val - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
function random(min, max) {
  return Math.round(scaleNums(Math.random(), [0, 1], [min, max]));
}

// initial state
const state = {
  main: [
    "gainsboro",
    "lightgray",
    "darkgray",
    "dimgray",
    "slategray",
    "darkslategray"
  ],
  accent: [
    "khaki",
    "coral",
    "palevioletred",
    "salmon",
    "yellow",
    "lavenderblush",
    "mediumpurple",
    "indigo",
    "chartreuse",
    "turquoise",
    "navajowhite"
  ],
  combos: [],
  selected: {
    main: "",
    accent: ""
  }
};

// getter - nagu methods??
const getters = {
  randomColors: function() {
    const mains = state.main;
    const accents = state.accent;
    const colors = {
      main: mains[random(0, mains.length - 1)],
      accent: accents[random(0, accents.length - 1)]
    };
    return colors;
  },
  makeCombos: function() {
    const combos = [];
    for (let i = 0; i < state.main.length; i++) {
      for (let j = 0; j < state.accent.length; j++) {
        combos.push({ main: state.main[i], accent: state.accent[j] });
      }
    }
    return combos;
  },
  watchSelected: function () {
    return state.selected
  }
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
