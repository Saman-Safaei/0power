<template>
  <div class="server-box">
    <button @click="toggle" class="server-box__toggle"><img src="/imgs/bioboxbtn.png"
        class="server-box__toggle-img"></button>

    <h3 class="server-box__ptitle">Ports</h3>
    <drop-down title="Ports 1" :data="dummyData.Ports1"/>
    <drop-down title="Ports 2" :data="dummyData.Ports2"/>
  </div>
</template>

<script setup>
import { mainStore } from '@/pinia/main';
import { reactive } from 'vue';
import DropDown from "@/components/ServerData/DropDown.vue";

const store = mainStore();

const dummyData = reactive(
  {
    TotalOnline: 69,
    Server1: 32,
    Server2: 37,
    Ports1: [27015, 27016, 27018, 27021, 28164, 28165, 28173, 28477, 28500, 28502, 28517, 28582, 28585, 28623, 28652, 28667, 28675, 28708, 28738, 28752, 28787, 28810, 28811, 28812, 28823, 28833, 28846, 28854, 28856, 28865],
    Ports2: [27015, 27016, 27018, 27021, 28164, 28165, 28173, 28477, 28500, 28502, 28517, 28582, 28585, 28623, 28652, 28667, 28675, 28708, 28738, 28752, 28787, 28810, 28811, 28812, 28823, 28833, 28846, 28854, 28856, 28865]
  });

function toggle() {
  store.toggleShowBio();
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.server-box {
  background: $boxes-color;
  width: $boxes-width;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  margin: 0.8rem 0;

  .server-box__toggle {
    position: absolute;
    top: 2rem;
    left: 100%;

    .server-box__toggle-img {
      opacity: 0.5;
      width: 30px;
    }

  }

  .server-box__ptitle {
    position: relative;
    text-align: center;
    color: rgb(40, 40, 40);

    &::after {
      content: "";
      position: absolute;
      width: 35%;
      height: 2px;
      top: 50%;
      left: 8px;
      background: rgb(40, 40, 40);
      border-radius: 2px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 35%;
      height: 2px;
      top: 50%;
      right: 8px;
      background: rgb(40, 40, 40);
      border-radius: 2px;
    }
  }

}
</style>