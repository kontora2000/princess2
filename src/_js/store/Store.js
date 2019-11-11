/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    dialogMesurementOpen: false,
    loadingSection: false,
    sections: [],
    sectionURLS: [],
    loadedCategories: [],
    currentCategory: '',
    currentSubsection: 0,
    backgroundColor: '#ffffff',
    textColor: '#000000',
  },
  mutations: {
    openDialog(state) {
      state.dialogMesurementOpen = true;
    },
    closeDialog(state) {
      state.dialogMesurementOpen = false;
    },
    changeSubsection(state, sub) {
      state.currentSubsection = sub;
    },
    changeBackground(state, color) {
      state.backgroundColor = color;
    },
    changeTextColor(state, color) {
      state.textColor = color;
    },
    putCategory(state, catname) {
      if (state.loadedCategories.indexOf(catname) < 0) {
        state.loadedCategories = { ...state.loadedCategories, catname, };
      }
    },
  },
});
