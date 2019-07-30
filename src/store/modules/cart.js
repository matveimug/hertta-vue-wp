import woocommerce from "../../api/woocommerce";
import * as types from "../mutation-types";
import api from "../../api";

// initial state
const state = {
  cart: [],
  modal: false,
};

const getters = {
  modalActive: state => state.modal,
  getCart: state => state.cart,
};
const mutations = {
  toggleModal: function(state, payload) {
    state.modal = payload;
  },
  addCart: function(state, payload) {
    state.cart = [...state.cart, payload];
  },
  editCart: function (state, payload) {
    state.cart[payload.index][payload.attr] = payload.value
  }
};
const actions = {
  toggleModal: function(context, payload) {
    context.commit("toggleModal", payload);
  },
  addCart: function(context, payload) {
    context.commit("addCart", payload);
  },
  editCart: function (context, payload) {
    context.commit("editCart", payload)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
