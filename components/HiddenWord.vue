<template>
  <div id="phrase" class="section">
    <ul>
      <li
        v-for="letter in store.getters.getOneQuote"
        :key="letter + Math.random(Date() * 9)"
        :class="
          letter === ' '
            ? 'space'
            : `letter ${letter} ${store.state.currentLetter.includes(letter) ? 'show' : 'hide'}`
        "
      >
        {{ letter }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()
    return {
      store,
      
    }
  },
}
</script>

<style lang="scss" scoped></style>
