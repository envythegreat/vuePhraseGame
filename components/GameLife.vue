<template>
  <div id="scoreboard" class="section">
    <ol>
      <li class="tries">
        <img
          v-for="n in $store.state.lifesLeft"
          :key="`${n * Math.random(n) + Date() }`"
          :src="require(`@/static/liveHeart.png`)"
          alt="Heart Icon"
          height="35"
          width="30"
          :style="{ margin: '10px' }"
        />
        <img
          v-for="n in $store.state.lifeLost"
          :key="`${n * Math.random(n) + Date() }`"
          :src="require(`@/static/lostHeart.png`)"
          alt="Heart Icon"
          height="35"
          width="30"
          :style="{ margin: '10px' }"
        />
      </li>
    </ol>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
