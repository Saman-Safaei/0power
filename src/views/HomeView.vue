<template>
  <div class="layout">
    <div class="layout__img"><img src="/Logo.jpg" alt="" class="logo" /></div>
    <div class="layout__box">
      <component :is="currentTab" />
      <icons />
    </div>
  </div>
</template>

<script setup>
import Icons from "@/components/Icons.vue";
import BioBox from "@/components/BioBox.vue";
import ServerBox from "@/components/ServerBox.vue";
import { reactive, ref, computed } from "vue";

const showBio = ref(false);
const currentTab = computed(() => {
  return (showBio) ? BioBox : ServerBox;
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 95vh;

  .layout__img {
    height: 70vh;
    align-self: flex-end;
    display: none;

    @media screen and (min-width: 850px) {
      display: block;
    }

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
