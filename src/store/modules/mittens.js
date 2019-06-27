import api from "../../api";
import _ from "lodash";
import * as types from "../mutation-types";
import "es6-promise/auto";

const scaleNums = (val, r1, r2) =>
  ((val - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
function random(min, max) {
  return Math.round(scaleNums(Math.random(), [0, 1], [min, max]));
}

const state = {
  colors: {
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
    selected: {
      main: "",
      accent: ""
    }
  }
};
// getter - nagu methods??
const getters = {
  randomColors: state => {
    const mains = state.colors.main;
    const accents = state.colors.accent;
    const colors = {
      main: mains[random(0, mains.length - 1)],
      accent: accents[random(0, accents.length - 1)]
    };
    return colors;
  }
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
