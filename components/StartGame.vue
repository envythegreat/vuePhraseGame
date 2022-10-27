<template>
  <div id="overlay" class="start">
    <div ><h2 class="title">{{text}}</h2></div>
    <div>
      <button id="btn__reset" @click="$emit('changeStatus')" >{{btnText}}</button>
    </div>
 
  </div>
</template>

<script>
export default {
  props: {
    text : {
      type:String,
      default : 'Game Ready'
    },
    btnText : {
      type:String,
      default : 'Start'
    }
  },
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
