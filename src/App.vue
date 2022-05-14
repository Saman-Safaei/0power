<template>
  <background />
  <div style="padding: 0 0 0 25%;">
    <router-view />
  </div>
</template>

<script setup>
import Background from "@/components/Background.vue";
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
