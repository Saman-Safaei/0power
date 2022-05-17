<template>
  <div class="server-box">
    <button @click="toggle" class="server-box__toggle"><img src="/imgs/bioboxbtn.png"
        class="server-box__toggle-img"></button>
    <template v-if="loaded && !error">
      <data-status title="Total Online" :data="data.TotalOnline" />
      <data-status title="Server 1" :data="data.Server1" />
      <data-status title="Server 2" :data="data.Server2" />
      <h3 class="server-box__ptitle">Ports</h3>
      <drop-down title="Ports 1" :data="data.Ports1" :is-open="dropdowns.ports1" @toggle="onDropdownToggle('ports1')" />
      <drop-down title="Ports 2" :data="data.Ports2" :is-open="dropdowns.ports2" @toggle="onDropdownToggle('ports2')" />
    </template>
    <template v-if="!loaded">
      <p class="server-box__loading">Loading ...</p>
    </template>
    <template v-if="loaded && error">
      <p class="server-box__error">An Error Occured !</p>
    </template>
  </div>
</template>

<script setup>
// Imports
import { mainStore } from '@/stores/main';
import { reactive, ref } from 'vue';
import DropDown from "@/components/ServerData/DropDown.vue";
import DataStatus from "@/components/ServerData/DataStatus.vue";
import api from "@/utils/api.js";

// For Test purposes
const data = reactive({});
const loaded = ref(false);
const error = ref(false);

api.get("/status")
  .then(res => {
    for (let key in res.data)
      data[key] = res.data[key];
    loaded.value = true;
  })
  .catch(err => {
    loaded.value = true;
    error.value = true;
  })

// DropDown Setups
const dropdowns = reactive({
  ports1: false,
  ports2: false,
});

function onDropdownToggle(name) {
  for (let key in dropdowns)
    if (dropdowns[name] !== dropdowns[key])
      dropdowns[key] = false;

  dropdowns[name] = !dropdowns[name];
}

// Stores
const store = mainStore();

function toggle() {
  store.toggleShowBio();
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.server-box {
  background: $boxes-color;
  width: 250px;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  margin: 0.8rem 0;


  @media screen and (min-width: $md) {
    width: $boxes-width;
  }

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

  .server-box__loading {
    text-align: center;
    height: 200px;
    font-family: sans-serif;
  }

  .server-box__error {
    text-align: center;
    font-family: sans-serif;
    height: 200px;
  }

}
</style>