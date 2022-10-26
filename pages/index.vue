<template>
  <div class="container">
    <StartGame v-if="GameStatus === 'notReady'"  @changeStatus="setData" />
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import StartGame from '@/components/StartGame.vue';


export default {
  name: 'IndexPage',
  components: {
    StartGame
  },

  computed: {
    ...mapState(["GameStatus"]),
  },
  methods: {
    ...mapActions(['setGameStatus']),
    setData() {
      this.$store.dispatch('setGameStatus', 'Started')
    }
  }
}
</script>
