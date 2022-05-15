<template>
  <div>
    <div>test</div>
    <button @click="toggle">BioBox</button>
  </div>
</template>

<script setup>
import { mainStore } from '@/pinia/main';

const store = mainStore();

function toggle() {
  store.toggleShowBio();
}
</script>

<style lang="scss" scoped>
</style>