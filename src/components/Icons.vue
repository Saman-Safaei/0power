<template>
  <ul class="icons">

    <li class="icons__icon icon1" @click="iconClicked(0)" @click.middle="iconClicked(0)">
      <img src="/imgs/discord.svg" />
    </li>

    <li class="icons__icon icon2" @click="iconClicked(1)" @click.middle="iconClicked(1)">
      <img src="/imgs/github.svg" />
    </li>

    <li class="icons__icon icon3" @click="iconClicked(2)" @click.middle="iconClicked(2)">
      <img src="/imgs/instagram.svg" />
    </li>

    <li class="icons__icon icon4" @click="iconClicked(3)" @click.middle="iconClicked(3)">
      <img src="/imgs/spotify.svg" />
    </li>

    <li class="icons__icon icon5" @click="iconClicked(4)" @click.middle="iconClicked(4)">
      <img src="/imgs/steam.svg" />
    </li>

    <li class="icons__icon icon6" @click="iconClicked(5)" @click.middle="iconClicked(5)">
      <img src="/imgs/telegram.svg" />
    </li>
    
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

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1rem);
  }

  100% {
    transform: translateY(0);
  }
}

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
    animation: bounce infinite 4s ease-in-out;

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

    &.icon1 {
      animation-delay: 500ms;
    }

    &.icon2 {
      animation-delay: 1000ms;
    }

    &.icon3 {
      animation-delay: 1500ms;
    }

    &.icon4 {
      animation-delay: 2000ms;
    }

    &.icon5 {
      animation-delay: 2500ms;
    }

    &.icon6 {
      animation-delay: 3000ms;
    }

  }

  .icons__dot {
    font-size: 0.8rem;

    @media screen and (min-width: $md) {
      font-size: 1rem;
    }
  }
}
</style>
