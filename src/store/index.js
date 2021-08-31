import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { no: 1, title: 'MLB 모자', isSelect: false, isChoice: false },
      { no: 2, title: '규조토 발매트', isSelect: false, isChoice: false },
      { no: 3, title: '체중계', isSelect: false, isChoice: false },
      { no: 4, title: '약속의네버랜드 11-20권', isSelect: false, isChoice: false },
    ],
  },
  getters: {
    allCards(state) {
      return state.cards
    },
    choiceAbleCards(state) {
      return state.cards.filter(card => !card.isSelect)
    }
  },
  mutations: {
    setSelect (state, idx) {
      state.cards[idx].isSelect = true
    },
    setChoice (state, idx) {
      state.cards[idx].isChoice = true
    },
    initCards(state) {
      state.cards.forEach(card => {
        card.isSelect = false
        card.isChoice = false
      })
    }
  },
  actions: {
    selectCard ({ commit }, {idx}) {
      commit('setSelect', idx)
    },
    choiceCard ({ commit }, {idx}) {
      commit('setChoice', idx)
    },
    init({commit}) {
      commit('initCards')
    }
  },
  plugins: [createPersistedState()]
})
