export const state = () => ({
  GameQuotes : [
    "Time to create your phrases",
    "Here s the documentation",
    "Inside the Game class",
    "the game will randomly choose",
    "You can copy the text",
    "You shall not pass",
  ],
  GameStatus : 'notReady',
  keys:'qwertyuiopasdfghjklzxcvbnm',
  GameLifes: 5
})

export const mutations = {
  changeGameStatus : (state, gameStatus) => (state.GameStatus = gameStatus),
  removeLife : (state) => (state.GameLifes -= 1)
}


export const actions = {
  setGameStatus({commit}, gameStatus) {
    commit('changeGameStatus', gameStatus)
  }
}

export const getters = {
  getMyKeys : state => {
    const splited = state.keys.split('')
    return {
      row1 : splited.slice(0,10),
      row2 : splited.slice(10,20),
      row3: splited.slice(20)
    }
  },
  getOneQuote : state => {
    const randomIndex = Math.floor((Math.random() * state.GameQuotes.length))
    return state.GameQuotes[randomIndex]
  }
}
