export const state = () => ({
  GameQuotes : [
    "Peoples lives dont end when they die it ends when they lose faith",
    "If you dont take risks you cant create a future",
    "If you dont share someones pain you can never understand them",
    "People become stronger because they have memories they cant forget",
    "Ill leave tomorrows problems to tomorrows me",
    "Why should I apologize for being a monster Has anyone ever apologized for turning me into one",
    "Even when our eyes are closed theres a whole world that exists outside ourselves and our dreams"
  ],
  GameStatus : 'notReady',
  keys:'qwertyuiopasdfghjklzxcvbnm',
  lifesLeft: 5,
  lifeLost:0,
  activePhrase:'',
  currentLetter: []
})

export const mutations = {
  changeGameStatus : (state, gameStatus) => (state.GameStatus = gameStatus),
  removeLife : (state) => {
    state.lifesLeft -= 1
    state.lifeLost += 1
  },
  setPhrase: (state, phrase) => (state.activePhrase = phrase.toLowerCase()),
  setCurrentLetter: (state, letter) => {
    if(!state.currentLetter.includes(letter)) state.currentLetter.push(letter)
  },
  startOver: (state) => {
    state.lifesLeft = 5
    state.currentLetter = []
    state.activePhrase = ''
    state.lifeLost = 0
  }

}


export const actions = {
  setGameStatus({commit}, gameStatus) {
    if(gameStatus === 'Started') {
      commit('startOver')
    }
    commit('changeGameStatus', gameStatus)
  },
  setActivePhrase({commit, state}) {
    const randomIndex = Math.floor((Math.random() * state.GameQuotes.length))
    commit('setPhrase', state.GameQuotes[randomIndex])
  },
  setCurrentLetter({commit}, letter) {
    commit('setCurrentLetter', letter)
  },
}

export const getters = {
  getMyKeys : state => {
    const splited = state.keys.split('')
    return {
      row1 : splited.slice(0,10),
      row2 : splited.slice(10,19),
      row3: splited.slice(19)
    }
  },
  getOneQuote : state => {
    return state.activePhrase
  },
  
}
