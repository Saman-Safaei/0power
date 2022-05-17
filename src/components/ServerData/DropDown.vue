<template>
  <div class="dropdown-container">

    <div class="dropdown">
      <span>{{ props.title }}</span>
      <button @click="emits('toggle')" :style="arrow" style="transition: transform 300ms;">&#10148;</button>
    </div>

    <Transition name="content">
      <div class="dropdown__content" v-if="isOpen">
        <div class="content__row" v-for="(value, index) in data" :key="value">
          <span>{{ index + 1 }}</span> <span>{{ value }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

const props = defineProps({
  data: Array,
  title: String,
  isOpen: Boolean
});

const emits = defineEmits(["toggle"]);

const arrow = computed(() => {
  return (props.isOpen) ? { transform: "rotateZ(90deg)" } : {};
});
</script>

<style lang="scss" scoped>
.dropdown-container {
  color: rgb(40, 40, 40);
  font-family: sans-serif;
  position: relative;

}

.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

.dropdown__content {
  background: rgba(187, 187, 187, 0.85);
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5rem;
  border-radius: 0.5rem;
  z-index: 1;

  &::after {
    content: "";
    width: 1rem;
    height: 0.8rem;
    background: rgba(187, 187, 187, 0.85);
    position: absolute;
    right: 50%;
    bottom: 100%;
    transform: translateX(50%) translateY(0.1px);
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);

  }

  .content__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.3rem 1rem;
  }
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
.content-enter-active,
.content-leave-active {
  transition: 300ms;
}
</style>
