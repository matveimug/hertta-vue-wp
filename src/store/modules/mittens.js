
const scaleNums = (val, r1, r2) =>
    ((val - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
function random(min, max) {
  return Math.round(scaleNums(Math.random(), [0, 1], [min, max]));
}

// initial state
const state = {
  main: [
    "GAINSBORO",
    "LIGHTGRAY",
    "DARKGRAY",
    "DIMGRAY",
    "SLATEGRAY",
    "DARKSLATEGRAY"
  ],
  accent: [
    "KHAKI",
    "CORAL",
    "PALEVIOLETRED",
    "SALMON",
    "YELLOW",
    "LAVENDERBLUSH",
    "MEDIUMPURPLE",
    "INDIGO",
    "CHARTREUSE",
    "TURQUOISE",
    "NAVAJOWHITE"
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
};
const mutations = {
  selectedColors: function(state, payload) {
    return state.payload.selected;
  }
};
const actions = {
  randomColors: function(context, payload) {
    console.log("action");
    console.log(context);
    console.log(payload);
    console.log("/action");
    context.commit("randomColors", payload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
