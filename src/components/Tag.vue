<template>
  <span class="tag">
    <slot>
    </slot>
  </span>
</template>

<style lang="scss" scoped>
.tag{
  font-family: Modelica, sans-serif;
  font-size: 0.7rem;
  display: inline-block;
  border: solid 1px rgba(158, 157, 157, 0.7); 
  border-radius: 0.2rem;
  padding: 0.2rem;

}
</style>
