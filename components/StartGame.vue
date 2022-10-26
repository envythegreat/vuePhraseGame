<template>
  <div class="game-start">
    <div><h2>Game Ready</h2></div>
    <div>
      <button @click="$emit('changeStatus')">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  emits : ['changeStatus']
}
</script>

<style lang="scss" scoped>
.game-start {
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
