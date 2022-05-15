<template>
  <div class="layout">
    <div class="layout__img"><img src="/Logo.jpg" alt="" class="logo" /></div>
    <div class="layout__box">
      <Transition name="faded" mode="out-in">
        <component :is="currentTab" />
      </Transition>
      <icons />
    </div>
  </div>
</template>

<script setup>
import Icons from "@/components/Icons.vue";
import BioBox from "@/components/BioBox.vue";
import ServerBox from "@/components/ServerBox.vue";
import { computed } from "vue";
import { mainStore } from "@/pinia/main";

const store = mainStore();

const currentTab = computed(() => {
  return (store.showBio) ? BioBox : ServerBox;
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 95vh;

  .layout__img {
    height: 70vh;
    align-self: flex-end;
    display: none;

    @media screen and (min-width: $md) {
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

.faded-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}
.faded-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}

.faded-enter-active,
.faded-leave-active {
  transition: all 500ms ease;
}
</style>
