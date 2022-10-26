export const state = () => ({
  GameQuotes : [
    "Lorem 1",
    "Lorem 2"
  ],
  GameStatus : 'notReady'
})

export const mutations = {
  changeGameStatus : (state, gameStatus) => (state.GameStatus = gameStatus)
}


export const actions = {
  setGameStatus({commit}, gameStatus) {
    commit('changeGameStatus', gameStatus)
  }
}
