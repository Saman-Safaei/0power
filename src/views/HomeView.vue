<template>
  <div class="home-view">
    <server-box/>
  </div>
  <icons />
</template>

<script setup>
import Icons from "@/components/Icons.vue";
import ServerBox from "@/components/ServerBox.vue";

</script>

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>
