<template>
  <div>
    <h2>Here is your hint</h2>
    <p>{{ props.hint }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  hint: {
    type: String,
    default:'ppp'
  },
})
</script>

<style lang="scss" scoped></style>
