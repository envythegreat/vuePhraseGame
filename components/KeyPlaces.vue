<template>
  <div id="qwerty" class="section">
    <div
      v-for="row in $store.getters.getMyKeys"
      :key="row + new Date()"
      class="keyrow"
    >
      <button
        v-for="item in row"
        :key="item + new Date()"
        :disabled="store.state.currentLetter.includes(item)"
        :class="`key ${store.state.currentLetter.includes(item) ? 'chosen' : ''}`"
        @click="(e) => $emit('checkIfExist',e)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'
export default {
  emits: ['checkIfExist'],
  setup() {
    const store = useStore()
    return {store}
  },
}
</script>
<style lang="scss" scoped></style>
