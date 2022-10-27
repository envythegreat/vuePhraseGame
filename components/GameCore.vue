<template>
  <div>
    <HiddenWordVue />
    <KeyPlaces />
    <GameLifeVue />
  </div>
</template>

<script>
import KeyPlaces from './KeyPlaces.vue';
import HiddenWordVue from './HiddenWord.vue';
import GameLifeVue from './GameLife.vue';
  export default {
    components: {
      KeyPlaces,
      HiddenWordVue,
      GameLifeVue
    }
  }
</script>

<style lang="scss" scoped>

</style>