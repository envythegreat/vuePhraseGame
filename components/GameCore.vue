<template>
  <div>
    <HiddenWordVue />
    <KeyPlaces @checkIfExist="checkIfLetterExist" />
    <GameLifeVue />
  </div>
</template>

<script>
// import { onBeforeMount } from 'vue';
import KeyPlaces from './KeyPlaces.vue';
import HiddenWordVue from './HiddenWord.vue';
import GameLifeVue from './GameLife.vue';

  export default {
    components: {
      KeyPlaces,
      HiddenWordVue,
      GameLifeVue
    },
    created() {
      this.$store.dispatch('setActivePhrase')
    },
    methods : {
      checkIfLetterExist(e) {
        const isLetterExist = this.$store.state.activePhrase.includes(e.target.innerText)
        if(isLetterExist) {
          this.$store.dispatch('setCurrentLetter', e.target.innerText)
        }else {
          this.$store.commit('removeLife')
        }
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>