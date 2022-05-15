<template>
  <div class="layout">
    <div class="layout__img"><img src="/Logo.jpg" alt="" class="logo" /></div>
    <div class="layout__box">
      <bio-box />
      <icons />
    </div>
  </div>
</template>

<script setup>
import Icons from "@/components/Icons.vue";
import BioBox from "@/components/BioBox.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 90vh;

  .layout__img {
    height: 50vh;
    align-self: flex-end;

    img {
      height: 100%;
    }
  }

  .layout__box {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    .box__component {
      min-height: 80vh;
    }
  }
}
</style>
