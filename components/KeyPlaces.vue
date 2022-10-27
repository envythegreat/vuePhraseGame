<template>
  <div id="qwerty" class="section">
    <div v-for="row in $store.getters.getMyKeys" :key="row + new Date()"  class="keyrow"  >
      <button  v-for="item in row" :key="item + new Date()"  class="key">{{item}}</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
    return {
  
    }
  },
}
</script>
<style lang="scss" scoped></style>
