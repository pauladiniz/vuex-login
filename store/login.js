export const state = (sessionStorage) => ({
  token: ''
})

export const getters = {
  TOKEN(state) { 
    return state.token
  }
}

export const mutations = {
  MUTATION_TOKEN(state, token) {
    state.token = token
  }
}

export const actions = {
  ACTION_TOKEN({ commit }, token) {
    commit('MUTATION_TOKEN', token)
  }
}