<template>
  <div class="data">
    <span class="data__key">{{ props.title }}</span>
    <span class="data__value">{{ props.data }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["title", "data"]);
</script>

<style lang="scss" scoped>
.data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  color: rgb(40, 40, 40);
  padding: 0.4rem 1rem;
  font-family: sans-serif;

  .data__value {
    background: rgba(255, 255, 255, 0.4);
    padding: 0.2rem;
    border-radius: 0.3rem;
  }
}
</style>