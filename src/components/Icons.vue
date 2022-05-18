<template>
  <ul class="icons">
    <li class="icons__icon"><img src="/imgs/discord.svg" @click="iconClicked(0)" @click.middle="iconClicked(0)" /></li>
    <li class="icons__dot">●</li>
    <li class="icons__icon"><img src="/imgs/github.svg" @click="iconClicked(1)" @click.middle="iconClicked(1)" /></li>
    <li class="icons__dot">●</li>
    <li class="icons__icon"><img src="/imgs/instagram.svg" @click="iconClicked(2)" @click.middle="iconClicked(2)" />
    </li>
    <li class="icons__dot">●</li>
    <li class="icons__icon"><img src="/imgs/spotify.svg" @click="iconClicked(3)" @click.middle="iconClicked(3)" /></li>
    <li class="icons__dot">●</li>
    <li class="icons__icon"><img src="/imgs/steam.svg" @click="iconClicked(4)" @click.middle="iconClicked(4)" /></li>
    <li class="icons__dot">●</li>
    <li class="icons__icon"><img src="/imgs/telegram.svg" @click="iconClicked(5)" @click.middle="iconClicked(5)" /></li>
  </ul>
</template>

<script setup>
function iconClicked(num) {
  switch (num) {
    case 0:
      open('https://discord.gg/invite/BXZp2Ca6xe');
      break;
    case 1:
      open('https://github.com/Zer0Power');
      break;
    case 2:
      open('https://instagram.com/zer0_p0wer');
      break;
    case 3:
      open('https://open.spotify.com/user/zl7sau4mrd9vv043uoorcn3t8?si=7d2793dedc7240b7');
      break;
    case 4:
      open('https://steamcommunity.com/id/Zer0_power');
      break;
    case 5:
      open('https://t.me/Zero_P0wer');
      break;
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/variables";

.icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  margin: 2rem 0;

  @media screen and (min-width: $md) {
    gap: 0.5rem;
  }

  .icons__icon {
    aspect-ratio: 1;
    height: 40px;
    cursor: pointer;
    position: relative;

    @media screen and (min-width: $md) {
      height: 50px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0 0 0 0;
      z-index: 1;
    }
  }

  .icons__dot {
    font-size: 0.9rem;

    @media screen and (min-width: $md) {
      font-size: 1.1rem;
    }
  }
}
</style>
