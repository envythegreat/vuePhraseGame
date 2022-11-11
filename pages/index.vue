<template>
  <div class="main-container">
    <GameStatus
      v-if="store.state.GameStatus === 'notReady'"
      @changeStatus="setData"
    />
    <section
      v-else-if="
        store.state.GameStatus === 'Started' && store.state.lifesLeft > 0
      "
    >
      <div id="banner" class="section">
        <h2 class="header">Phrase Hunter</h2>
      </div>
      <GameCoreVue />
    </section>
    <GameStatus
      v-else-if="
        store.state.lifesLeft === 0 && store.state.GameStatus === 'GameOver'
      "
      text="Game Over"
      btn-text="Play Again"
      @changeStatus="setData"
    />
    <GameStatus
      v-else-if="store.state.GameStatus === 'GameWon'"
      text="You Won"
      btn-text="Play Again"
      @changeStatus="setData"
    />
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import { useStore, watchEffect } from '@nuxtjs/composition-api'
import GameStatus from '@/components/StartGame.vue'
import GameCoreVue from '~/components/GameCore.vue'

// import HiddenWordVue from '~/components/HiddenWord.vue'

export default {
  name: 'IndexPage',
  components: {
    GameCoreVue,
    GameStatus,
  },
  setup() {
    const store = useStore()
    function setData() {
      store.dispatch('setGameStatus', 'Started')
    }

    function removeDuplicatAndSpace(arr) {
      const newArr = arr.replace(/ /g, '').split('')
      return [...new Set(newArr)]
    }

    watchEffect(() => {
      if (store.state.lifesLeft === 0) {
        store.dispatch('setGameStatus', 'GameOver')
      }
      if (
        removeDuplicatAndSpace(store.state.activePhrase).length !== 0 &&
        removeDuplicatAndSpace(store.state.activePhrase).length ===
          store.state.currentLetter.length
      ) {
        store.dispatch('setGameStatus', 'GameWon') 
      }
    })

    return {
      store,
      setData,
      removeDuplicatAndSpace,
    }
  },
}
</script>
