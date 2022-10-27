<template>
  <div class="main-container">
    <StartGame v-if="GameStatus === 'notReady'" @changeStatus="setData" />
    <section v-if="GameStatus === 'Started'">
      <div id="banner" class="section">
        <h2 class="header">Phrase Hunter</h2>
      </div>
      <!-- <HiddenWordVue /> -->
      <GameCoreVue />
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import StartGame from '@/components/StartGame.vue'
import GameCoreVue from '~/components/GameCore.vue'
// import HiddenWordVue from '~/components/HiddenWord.vue'

export default {
  name: 'IndexPage',
  components: {
    StartGame,
    GameCoreVue,
    // HiddenWordVue
  },

  computed: {
    ...mapState(['GameStatus']),
  },
  methods: {
    ...mapActions(['setGameStatus']),
    setData() {
      this.$store.dispatch('setGameStatus', 'Started')
    },
  },
}
</script>
